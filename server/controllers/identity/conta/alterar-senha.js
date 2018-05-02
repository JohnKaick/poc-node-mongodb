const passwordhash = require('password-hash')

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeConta } = db.models

const verificarAcesso = require('./verificar-acesso')

module.exports = async function (usuarioId, data) {

    // Verifica-se o usuário está logado
    if (!usuarioId) throw new eh.KnownError('unauthorized', 'usuario_invalid')

    // Buscar usuário no db
    let conta = await IdeConta.findOne({ usuario: usuarioId })

    // Checa ser a senha atual é valida
    await verificarAcesso.senha(conta, data.senhaAtual)

    // Salvar no db a senha no modo passwordhash
    let senhaNova = await passwordhash.generate(data.senhaNova)

    await conta.update({
        hashSenha: senhaNova,
        ultimaTrocaSenha: new Date()
    }, function (err, res) {
        if (err) throw new eh.KnownError('notFound', 'conta_notSaved')
        em.emit('conta-editada', { res })
    })

    return { success: true }

}
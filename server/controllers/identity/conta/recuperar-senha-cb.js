const passwordHash = require('password-hash')

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeConta } = db.models

const gerarToken = require('./gerar-token')
const permissao = require('./permissao')

module.exports = async function (token, data) {

    try {
        // Verifica-se o token existe
        let conta = await IdeConta.findOne({ tokenSenha: token }).populate({ path: 'usuario', populate: 'empresa' })
        if (!conta) throw new eh.KnownError('unauthorized', 'token_invalid')

        // Verifica-se o e-mail está correto
        // if (conta.login != data.email) throw new eh.KnownError('unauthorized', 'email_invalid')

        // Salvar nova senha
        let senhaNova = await passwordHash.generate(data.senha)

        // Limpar token no db
        await conta.update({
            tokenSenha: null,
            hashSenha: senhaNova,
            ultimaTrocaSenha: new Date()
        }, function (err, res) {
            if (err) throw new eh.KnownError('notFound', 'conta_notSaved')
        })

        // Obter permissão de usuário
        let regra = await permissao(conta.usuario)

        // Gerar Token
        let auth = await gerarToken(conta, conta.usuario, regra)

        return auth

    } catch (err) {
        console.log(err)
    }

}
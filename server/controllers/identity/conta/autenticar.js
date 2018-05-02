const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeConta } = db.models

const verificarAcesso = require('./verificar-acesso')
const gerarToken = require('./gerar-token')
const permissao = require('./permissao')

module.exports = async function (data) {
    let conta = null

    try {

        conta = await IdeConta.findOne({ login: data.login }).populate({ path: 'usuario', populate: 'empresa' })
        if (!conta || !conta.usuario) throw new eh.KnownError('unauthorized', 'conta_invalid')

        // Checar login e senha
        await verificarAcesso.login(conta, data.senha)

        // Obter permissão de usuário
        let regra = await permissao(conta.usuario)

        // Gerar token
        let auth = await gerarToken(conta, conta.usuario, regra)

        return auth

    } finally {
        // Registrar tentativa de acesso
        em.emit('login-attempt', { data, conta })
    }

} 
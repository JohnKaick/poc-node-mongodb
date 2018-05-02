
const eh = require('common/error-handler')
const knownError = eh.KnownError
const em = require('common/emitter')
const db = require('database')
const { IdeConta } = db.models

const gerarToken = require('./gerar-token')
const permissao = require('./permissao')

module.exports = async function (token) {
    try {
        // Verifica-se o token existe
        const conta = await IdeConta.findOne({ tokenEmail: token }).populate({ path: 'usuario', populate: 'empresa' })
        if (!conta) throw new eh.KnownError('unauthorized', 'token_invalid')

        // Salvar conta confirmada no db
        await conta.update({
            'tokenEmail': null,
            'emailVerificado': true
        })

        // Obter permissão de usuário
        const regra = await permissao(conta.usuario)

        // Gerar Token
        const auth = await gerarToken(conta, conta.usuario, regra)

        return auth

    } catch (err) {
        console.log(err)
    }

}
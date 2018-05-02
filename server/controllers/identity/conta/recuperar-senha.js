const uuid = require('uuid')
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeConta } = db.models

const verificarAcesso = require('./verificar-acesso')

module.exports = async function (email) {

    // Verficar e-mail da conta
    let conta = await IdeConta
        .findOne({ login: email })
        .populate('usuario')
        .populate({ path: 'usuario', populate: 'empresa' })

    if (!conta) throw new eh.KnownError('unauthorized', 'email_invalid')

    // Checa ser possui algum bloqueio
    await verificarAcesso.email(conta)

    //Salvar token no db
    conta.tokenSenha = uuid.v4()
    await conta.save()

    // Enviar e-mail para recuperação de conta
    em.emit('conta-recuperar', conta)

    return { success: true }

}
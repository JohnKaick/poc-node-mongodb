const passwordHash = require('password-hash')

const eh = require('common/error-handler')

// Checa todos os possiveis motivos do usuário não poder se conectar.
module.exports.login = async function (conta, password) {

    if (!conta || !passwordHash.verify(password, conta.hashSenha)) {
        throw new eh.KnownError('unauthorized', 'conta_invalid')
    }
    if (conta.bloqueado) {
        throw new eh.KnownError('unauthorized', 'conta_blocked')
    }
    if (!conta.emailVerificado) {
        throw new eh.KnownError('unauthorized', 'confirm_invalid')
    }
    if (!conta.usuario.exibicao) {
        throw new eh.KnownError('unauthorized', 'conta_notExist')
    }

    return true
}

module.exports.email = async function (conta) {

    if (conta.bloqueado) {
        throw new eh.KnownError('unauthorized', 'conta_blocked')
    }
    if (!conta.emailVerificado) {
        throw new eh.KnownError('unauthorized', 'confirm_invalid')
    }

    return true
}

module.exports.senha = async function (conta, password) {

    if (!conta || !passwordHash.verify(password, conta.hashSenha)) {
        throw new eh.KnownError('unauthorized', 'conta_invalid')
    }

    return true
}

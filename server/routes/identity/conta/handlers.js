const eh = require('common/error-handler')

const {
    autenticar,
    alterarSenha,
    confirmarConta,
    recuperarSenha,
    recuperarSenhaCb,
    cadastrar
} = require('controllers/identity/conta')

module.exports.autenticar = async function (request, reply) {
    try {
        const result = await autenticar(request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.alterarSenha = async function (request, reply) {
    try {
        const result = await alterarSenha(request.auth.credentials.usuarioId, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.confirmarConta = async function (request, reply) {
    try {
        const result = await confirmarConta(request.params.token)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.recuperarSenha = async function (request, reply) {
    try {
        const result = await recuperarSenha(request.payload.email)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.recuperarSenhaCb = async function (request, reply) {
    try {
        const result = await recuperarSenhaCb(request.params.token, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(request.payload, request.app)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

module.exports.obterStatusServidor = async function (request, reply) {
    reply({ status: 'online' })
}
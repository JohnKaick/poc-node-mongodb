const eh = require('common/error-handler')

const {
    obter, obterAdmin, obterTodos, cadastrar,
    editar, convidar, desconvidar
} = require('controllers/identity/empresa')

// getters

module.exports.obter = async function (request, reply) {
    try {
        const result = await obter(request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.obterAtual = async function (request, reply) {
    try {
        const result = await obter(request.auth.credentials.empresaId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.obterAdmin = async function (request, reply) {
    try {
        const result = await obterAdmin(
            request.auth.credentials.usuarioId,
            request.auth.credentials.empresaId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.obterTodos = async function (request, reply) {
    try {
        const result = await obterTodos(request.auth.credentials.empresaId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

// actions 

module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(request.auth.credentials.usuarioId, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.editar = async function (request, reply) {
    try {
        const result = await editar(request.auth.credentials.usuarioId, request.params.id, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.convidar = async function (request, reply) {
    try {
        const result = await convidar(request.params.id, request.payload.email)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.desconvidar = async function (request, reply) {
    try {
        const result = await desconvidar(request.params.id, request.payload.email)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
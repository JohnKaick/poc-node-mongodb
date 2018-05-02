const eh = require('common/error-handler')

const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover,
    obterImagem,
    inserirImagem,
    removerImagem,
} = require('controllers/diario-obra/item')

module.exports.obter = async function (request, reply) {
    try {
        const result = await obter(request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.obterTodos = async function (request, reply) {
    try {
        const result = await obterTodos(request.auth.credentials, request.params.diarioId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(request.auth.credentials, request.params.diarioId, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.editar = async function (request, reply) {
    try {
        const result = await editar(request.auth.credentials, request.params.id, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.remover = async function (request, reply) {
    try {
        const result = await remover(request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

module.exports.obterImagem = async function (request, reply) {
    try {
        const result = await obterImagem(request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.inserirImagem = async function (request, reply) {
    try {
        const result = await inserirImagem(
            request.auth.credentials.usuarioId,
            request.params.id,
            request,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.removerImagem = async function (request, reply) {
    try {
        const result = await removerImagem(request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
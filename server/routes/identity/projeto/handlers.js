const eh = require('common/error-handler')

const {
    obter,
    obterTodos,
    obterTodosPorProjeto,
    obterParametro,
    cadastrar,
    editar,
    cadastrarParametro,
    editarParametro,
    inserirImagem,
    removerImagem,
    removerParametro
} = require('controllers/identity/projeto')

module.exports.obterTodos = async function (request, reply) {
    try {
        const result = await obterTodos(
            request.auth.credentials.usuarioId,
            request.auth.credentials.empresaId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.obter = async function (request, reply) {
    try {
        const result = await obter(
            request.params.id,
            request.auth.credentials.usuarioId,
            request.auth.credentials.empresaId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.obterParametro = async function (request, reply) {
    try {
        const result = await obterParametro(request.params.projetoId, request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(
            request.auth.credentials,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.editar = async function (request, reply) {
    try {
        const result = await editar(
            request.auth.credentials.usuarioId,
            request.params.id,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrarParametro = async function (request, reply) {
    try {
        const result = await cadastrarParametro(
            request.auth.credentials,
            request.params.projetoId,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.editarParametro = async function (request, reply) {
    try {
        const result = await editarParametro(
            request.auth.credentials,
            request.params.projetoId,
            request.params.id,
            request.payload
        )
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
module.exports.removerParametro = async function (request, reply) {
    try {
        const result = await removerParametro(request.params.projetoId, request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

// TODO: deveria estar na controller de usuarios...
module.exports.obterTodosPorProjeto = async function (request, reply) {
    try {
        const result = await obterTodosPorProjeto(request.params.projetoId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
const eh = require('common/error-handler')

const {
    obter,
    obterTodosChecklist,
    obterTodos,
    cadastrar,
    editar,
    verificar,
    remover
} = require('controllers/checklist/elemento')

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
        const result = await obterTodos(request.params.grupoId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.obterTodosChecklist = async function (request, reply) {
    try {
        const result = await obterTodosChecklist(request.params.checklistId, request.query)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(
            request.auth.credentials,
            request.params.mdElementoId,
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
            request.auth.credentials,
            request.params.id,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.verificar = async function (request, reply) {
    try {
        const result = await verificar(
            request.auth.credentials,
            request.params.checklistId,
            request.payload
        )
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
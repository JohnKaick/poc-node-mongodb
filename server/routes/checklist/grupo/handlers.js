const eh = require('common/error-handler')

const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    verificar,
    remover
} = require('controllers/checklist/grupo')

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
        const result = await obterTodos(request.params.projetoId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(
            request.auth.credentials,
            request.params.projetoId,
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
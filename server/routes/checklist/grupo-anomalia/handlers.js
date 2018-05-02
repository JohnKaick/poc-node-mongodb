const eh = require('common/error-handler')

const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover,
    imagem
} = require('controllers/checklist/grupo-anomalia')

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
        const result = await obterTodos(request.params.mdGrupoAnomaliaId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(
            request.auth.credentials,
            request.params.mdGrupoAnomaliaId,
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
module.exports.remover = async function (request, reply) {
    try {
        const result = await remover(request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.imagem = async function (request, reply) {
    try {
        const result = await imagem(
            request.auth.credentials,
            request.params.id,
            request.payload,
            request.headers,
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
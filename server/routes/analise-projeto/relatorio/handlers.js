const eh = require('common/error-handler')

const {
    obter,
    obterTodos,
    obterPublico,
    cadastrar,
    editar,
    migrar,
    transmitir,
    remover,
    vincularColaborador,
    removerColaborador
} = require('controllers/analise-projeto/relatorio')

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
module.exports.obterPublico = async function (request, reply) {
    try {
        const result = await obterPublico(request.params.token)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(request.auth.credentials, request.params.projetoId, request.payload)
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
module.exports.migrar = async function (request, reply) {
    try {
        const result = await migrar(request.auth.credentials, request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.transmitir = async function (request, reply) {
    try {
        const result = await transmitir(request.params.id)
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
module.exports.vincularColaborador = async function (request, reply) {
    try {
        const result = await vincularColaborador(request.params.id, request.params.colaboradorId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.removerColaborador = async function (request, reply) {
    try {
        const result = await removerColaborador(request.params.id, request.params.colaboradorId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
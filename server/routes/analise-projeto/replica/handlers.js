const eh = require('common/error-handler')

const {
    cadastrar,
    cadastrarPublico,
    aprovar,
    remover
} = require('controllers/analise-projeto/replica')

module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(
            request.auth.credentials,
            request.params.itemId,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrarPublico = async function (request, reply) {
    try {
        const result = await cadastrarPublico(
            request.params.token,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.aprovar = async function (request, reply) {
    try {
        const result = await aprovar(
            request.auth.credentials.usuarioId,
            request.params.itemId,
            request.params.id
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.remover = async function (request, reply) {
    try {
        const result = await remover(request.params.itemId, request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
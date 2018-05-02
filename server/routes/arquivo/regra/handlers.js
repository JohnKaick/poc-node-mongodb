const eh = require('common/error-handler')

const {
    regraPasta,
    regraGrupo,
    atribuirPasta,
    atribuirGrupo
} = require('controllers/arquivo/regra')

module.exports.regraPasta = async function (request, reply) {
    try {
        const result = await regraPasta(request.params.projetoId, request.params.pastaId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.regraGrupo = async function (request, reply) {
    try {
        const result = await regraGrupo(request.params.projetoId, request.params.grupoId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.atribuirPasta = async function (request, reply) {
    try {
        const result = await atribuirPasta(request.auth.credentials, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.atribuirGrupo = async function (request, reply) {
    try {
        const result = await atribuirGrupo(request.auth.credentials, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
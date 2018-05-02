const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioParticipante, DioRegistro } = db.models

module.exports = async function (auth, diarioId, participanteId, presente) {

    let diario = await DioRegistro.findById(diarioId)

    // Vincular participante
    let participante = await DioParticipante.create({
        projeto: diario.projeto,
        empresa: diario.empresa,
        diario: diarioId,
        colaborador: participanteId,
        presente: presente,
        criadoPor: auth.usuarioId,
        criadoEm: new Date()
    })

    return participante

}


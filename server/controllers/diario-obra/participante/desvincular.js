const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioParticipante, IdeColaborador } = db.models

module.exports = async function (diarioId, participanteId) {

    // Desvincular participante
    await DioParticipante.findOneAndRemove({ diario: diarioId, _id: participanteId })

    return { success: true }

}
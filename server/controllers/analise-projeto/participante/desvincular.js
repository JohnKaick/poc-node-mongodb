const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprParticipante, IdeColaborador } = db.models

module.exports = async function (relatorioId, participanteId) {

    // Desvincular participante
    await AprParticipante.findOneAndRemove({ relatorio: relatorioId, _id: participanteId })

    return { success: true }

}
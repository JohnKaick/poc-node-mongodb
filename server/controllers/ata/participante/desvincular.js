const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaParticipante, IdeColaborador } = db.models

module.exports = async function (ataId, participanteId) {

    // Desvincular participante
    await AtaParticipante.findOneAndRemove({ ata: ataId, _id: participanteId })

    return { success: true }

}


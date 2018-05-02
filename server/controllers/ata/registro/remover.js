const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaRegistro, AtaItem, AtaParticipante } = db.models

module.exports = async function (ataId) {

    // Remover ata
    await AtaRegistro.findByIdAndRemove(ataId, async function (err, doc) {
        if (err) throw new eh.KnownError('notFound', 'ata_notFound')

        await AtaItem.remove({ ata: ataId })
        await AtaParticipante.remove({ ata: ataId })
    })

    return { success: true }

}
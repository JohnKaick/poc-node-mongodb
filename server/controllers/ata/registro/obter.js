const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaRegistro } = db.models

module.exports = async function (ataId) {

    // Obter ata
    let ata = await AtaRegistro.findById(ataId)

    return ata

}


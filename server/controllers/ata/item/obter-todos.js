const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaItem } = db.models

module.exports = async function (ataId) {

    // Obtem todos os itens
    let item = await AtaItem.find({ ata: ataId }).sort({ criadoEm: 'asc'})

    return item

}


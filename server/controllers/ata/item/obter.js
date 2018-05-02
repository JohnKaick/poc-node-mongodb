const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaItem } = db.models

module.exports = async function (itemId) {

    // Obter item
    let item = await AtaItem.findById(itemId)

    return item

}


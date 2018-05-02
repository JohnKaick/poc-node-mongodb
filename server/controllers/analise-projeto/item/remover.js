const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprItem } = db.models

module.exports = async function (itemId) {

    // Remover item
    await AprItem.findByIdAndRemove(itemId)

    return { success: true }

}
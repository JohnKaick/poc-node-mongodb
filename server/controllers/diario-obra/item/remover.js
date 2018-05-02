const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioItem } = db.models

module.exports = async function (itemId) {

    // Editar diario-obra item
    await DioItem.findByIdAndRemove(itemId)

    return { success: true }
}
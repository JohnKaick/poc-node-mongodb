const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioItem } = db.models

module.exports = async function (itemId) {

    // obter diario-obra item
    let item = await DioItem.findById(itemId)

    return item
}
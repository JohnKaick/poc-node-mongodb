const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprItem } = db.models

module.exports = async function (id) {

    let item = await AprItem.findById(id).populate('replicas')

    return item

}
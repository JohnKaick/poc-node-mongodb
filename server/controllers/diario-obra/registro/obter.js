const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioRegistro } = db.models

module.exports = async function (diarioId) {

    // Obter diario-obra
    let diario = await DioRegistro.findById(diarioId)

    return diario

}
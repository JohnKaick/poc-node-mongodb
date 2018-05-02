const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioRegistro } = db.models

module.exports = async function (diarioId) {

    // Remover diario-obra
    await DioRegistro.findByIdAndRemove(diarioId)

    return { success: true }

}
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElemento } = db.models

module.exports = async function (elementoId) {

    // Remover elemento
    await ChkElemento.findByIdAndRemove(elementoId)

    em.emit('elemento-removido', {})

    return { success: true }

}

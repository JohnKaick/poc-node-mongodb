const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElemento } = db.models

module.exports = async function (mdElementoId) {

    // Remover elemento
    await ChkMdElemento.findByIdAndRemove(mdElementoId)

    em.emit('mdElemento-removido', {})

    return { success: true }

}


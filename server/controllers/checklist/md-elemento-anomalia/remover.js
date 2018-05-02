const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElementoAnomalia } = db.models

module.exports = async function (mdElementoAnomaliaId) {

    // Remover elemento anomalia
    await ChkMdElementoAnomalia.findByIdAndRemove(mdElementoAnomaliaId)

    em.emit('mdElementoAnomalia-removida', {})

    return { success: true }

}


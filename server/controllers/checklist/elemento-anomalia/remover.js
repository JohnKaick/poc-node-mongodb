const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElementoAnomalia, ChkElemento, ChkMdElementoAnomalia } = db.models

module.exports = async function (elementoAnomaliaId) {

    // Remover elemento-anomalia
    await ChkElementoAnomalia.findByIdAndRemove(elementoAnomaliaId)

    em.emit('elemento-anomalia-remover', {})

    return { success: true }

}


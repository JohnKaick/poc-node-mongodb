const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElementoAnomalia } = db.models

module.exports = async function (mdElementoAnomaliaId) {

    // Obter elemento anomalia
    let elemento = await ChkMdElementoAnomalia.findById(mdElementoAnomaliaId).populate('disciplina pasta elemento')

    em.emit('mdElementoAnomalia-obtida', { elemento })

    return elemento

}


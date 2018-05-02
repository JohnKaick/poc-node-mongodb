const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElementoAnomalia } = db.models

module.exports = async function (mdElementoId) {

    // Obtem elementos anomalias
    let elementos = await ChkMdElementoAnomalia.find({ elemento: mdElementoId }).populate('disciplina pasta elemento')

    em.emit('mdElementoAnomalias-obtidas', { elementos })

    return elementos

}


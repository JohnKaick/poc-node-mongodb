const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElemento } = db.models

module.exports = async function (elementoId) {

    // Obter elemento
    let elemento = await ChkElemento.findById(elementoId).populate('projeto grupo modelo')

    em.emit('elemento-obtido', { elemento })

    return elemento

}


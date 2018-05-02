const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElemento } = db.models

module.exports = async function () {

    // Obter todos os elementos
    let elementos = await ChkMdElemento.find().populate('disciplina pasta categoria')

    em.emit('mdElementos-obtida', { elementos })

    return elementos

}


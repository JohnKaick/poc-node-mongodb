const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElemento } = db.models

module.exports = async function (pastaId) {

    // Obter todos os elementos por pasta
    let elementos = await ChkMdElemento.find({ pasta: pastaId })

    return elementos

}


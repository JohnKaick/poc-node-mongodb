const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeColaborador } = db.models

module.exports = async function (colaboradorId) {

    // Obtem colaborador
    let colaborador = await IdeColaborador.findById(colaboradorId)

    return colaborador

}
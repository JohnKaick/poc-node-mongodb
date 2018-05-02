const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeColaborador } = db.models

module.exports = async function (empresaId, query) {

    let w = { empresa: empresaId }

    if (query.exclude) {
        w._id = { $nin: query.exclude.split(',') }
    }
    // Obtem todos os colaboradores
    let colaboradores = await IdeColaborador.find(w).sort({ nome: 1 }).populate('empresa')

    return colaboradores

}
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioRegistro } = db.models

module.exports = async function (projetoId) {

    // Obtem todos os diario-obra do projeto
    let diarios = await DioRegistro.find({ projeto: projetoId }).sort({ dataHora: 'desc' })

    return diarios

}
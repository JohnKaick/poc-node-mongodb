const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprItem } = db.models

module.exports = async function (relatorioId) {

    // Obtem todos itens
    let itens = await AprItem.find({ relatorio: relatorioId }).populate('replicas.criadoPor').sort({ 'posicao': 'asc' })

    return itens

}
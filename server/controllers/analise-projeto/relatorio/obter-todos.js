const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprRelatorio, AprArquivoAnalisado } = db.models

module.exports = async function (projetoId) {

    // Obtem todos relatorios
    let relatorios = await AprRelatorio
        .find({ projeto: projetoId })
        .sort({ data: 'desc' })

    return relatorios

}
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprRelatorio, AprArquivoAnalisado } = db.models

module.exports = async function (relatorioId) {

    // Obter relatorio
    let relatorio = await AprRelatorio.findById(relatorioId).populate({ path: 'participante', populate: 'colaborador' })

    let arquivos = await AprArquivoAnalisado.find({ relatorio: relatorio }).sort({ arquivo: 'asc' })

    relatorio.arquivos = arquivos

    return relatorio

}
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprArquivoAnalisado } = db.models

module.exports = async function (arquivoId) {

    // Remover arquivo
    await AprArquivoAnalisado.findByIdAndRemove(arquivoId)

    return { success: true }

}
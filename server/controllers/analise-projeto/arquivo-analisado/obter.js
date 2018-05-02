const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprArquivoAnalisado } = db.models

module.exports = async function (arquivoId) {

    // Obter arquivo
    let arquivo = await AprArquivoAnalisado.findById(arquivoId)

    em.emit('arquivo-analisado-obtido', { arquivo })

    return arquivo

}
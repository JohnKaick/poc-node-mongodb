const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqArquivo } = db.models

module.exports = async function (arquivoId) {

    // Remover arquivo
    await ArqArquivo.findByIdAndRemove(arquivoId)

    em.emit('arquivo-removido', {})

    return { success: true }

}
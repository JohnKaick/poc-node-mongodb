const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdPasta } = db.models

module.exports = async function (mdPastaId) {

    // Cadastrar pasta
    await ChkMdPasta.findByIdAndRemove(mdPastaId)

    em.emit('mdPasta-cadastrada', {})

    return { success: true }

}


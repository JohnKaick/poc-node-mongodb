const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdPasta } = db.models

module.exports = async function (mdPastaId) {

    // Obter pasta
    let pasta = await ChkMdPasta.findById(mdPastaId).populate('disciplina')

    em.emit('mdPasta-obtida', { pasta })

    return pasta

}


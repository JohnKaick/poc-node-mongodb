const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqPasta } = db.models

module.exports = async function (pastaId) {

    // Obter pasta
    let pasta = await ArqPasta.findById(pastaId).populate('projeto disciplina')

    em.emit('pasta-obtida', { pasta })

    return pasta

}


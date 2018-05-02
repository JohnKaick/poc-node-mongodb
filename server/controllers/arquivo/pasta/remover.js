const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqPasta } = db.models

module.exports = async function (pastaId) {

    // Remover pasta
    await ArqPasta.findByIdAndRemove(pastaId)

    em.emit('pasta-removida', {})

    return { success: true }

}


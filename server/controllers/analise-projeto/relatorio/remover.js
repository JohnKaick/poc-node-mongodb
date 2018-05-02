const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprRelatorio } = db.models

module.exports = async function (analiseId) {

    // Remover pasta
    await AprRelatorio.findByIdAndRemove(analiseId)

    em.emit('analise-projeto-removido', {})

    return { success: true }

}
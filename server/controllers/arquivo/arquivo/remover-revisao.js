const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqRevisao } = db.models

module.exports = async function (revisaoId) {

    // Remover revisao
    await ArqRevisao.findByIdAndRemove(revisaoId)

    em.emit('revisao-removida', {})

    return { success: true }

}
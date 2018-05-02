const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqGrupo } = db.models

module.exports = async function (grupoId) {

    // Remover grupo
    await ArqGrupo.findByIdAndRemove(grupoId)

    em.emit('grupo-removido', {})

    return { success: true }

}


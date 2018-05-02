const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupo } = db.models

module.exports = async function (grupoId) {

    // Remover grupo
    await ChkGrupo.findByIdAndRemove(grupoId)

    em.emit('grupo-removido', {})

    return { success: true }

}


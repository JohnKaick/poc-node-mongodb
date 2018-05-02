const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdGrupoAnomalia } = db.models

module.exports = async function (mdGrupoAnomaliaId) {

    // Remover grupo anomalia
    await ChkMdGrupoAnomalia.findByIdAndRemove(mdGrupoAnomaliaId)

    em.emit('mdGrupoAnomalia-removida', {})

    return { success: true }

}


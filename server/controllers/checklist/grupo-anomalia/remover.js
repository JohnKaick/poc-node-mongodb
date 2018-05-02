const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupoAnomalia } = db.models

module.exports = async function (grupoAnomaliaId) {

    // Obter grupo-anomalia
    await ChkGrupoAnomalia.findByIdAndRemove(grupoAnomaliaId)

    em.emit('grupo-anomalia-remover', {})

    return { success: true }

}


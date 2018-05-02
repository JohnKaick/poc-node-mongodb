const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupoAnomalia } = db.models

module.exports = async function (grupoAnomaliaId) {

    // Obter grupo-anomalia
    let anomalia = await ChkGrupoAnomalia.findById(grupoAnomaliaId).populate('projeto checklist grupo modelo imagens')

    em.emit('grupo-anomalia-obtida', { anomalia })

    return anomalia

}


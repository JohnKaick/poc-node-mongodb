const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdGrupoAnomalia } = db.models

module.exports = async function (mdGrupoAnomaliaId) {

    // Obter elemento anomalia
    let grupo = await ChkMdGrupoAnomalia.findById(mdGrupoAnomaliaId).populate('disciplina pasta')

    em.emit('mdGrupoAnomalia-obtida', { grupo })

    return grupo

}


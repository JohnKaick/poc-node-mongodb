const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupoAnomalia } = db.models

module.exports = async function (modeloId) {

    // Obtem todos os grupo-anomalia
    let anomalias = await ChkGrupoAnomalia.find({ modelo: modeloId }).populate('projeto checklist grupo modelo imagens')

    em.emit('grupo-anomalia-obtidas', { anomalias })

    return anomalias

}


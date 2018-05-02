const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkChecklistGrupo, ChkChecklist } = db.models

module.exports = async function (usuarioId, checklistId, data) {

    let checklist = await ChkChecklist.findById(checklistId)

    // Verificar grupo
    let grupo = await ChkChecklistGrupo.create({
        projeto: checklist.projeto,
        checklist: checklistId,
        grupos: data.grupos,
        anomalias: data.anomalias,
        situacao: data.situacao,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId
    })

    em.emit('checklist-grupo-cadatrado', { grupo })

    return grupo

}

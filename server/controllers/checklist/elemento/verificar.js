const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkChecklistElemento, ChkChecklist } = db.models

module.exports = async function (usuarioId, checklistId, data) {

    let checklist = await ChkChecklist.findById(checklistId)

    // Verificar elemento
    let elemento = await ChkChecklistElemento.create({
        projeto: checklist.projeto,
        checklist: checklistId,
        elementos: data.elementos,
        anomalias: data.anomalias,
        situacao: data.situacao,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId
    })

    em.emit('checklist-elemento-cadatrado', { elemento })

    return elemento

}

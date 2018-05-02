const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkChecklist } = db.models

module.exports = async function (auth, checklistId, data) {

    // Editar checklist
    let checklist = await ChkChecklist.findByIdAndUpdate(checklistId, {
        nome: data.nome,
        descritivo: data.descritivo,
        tipo: data.tipo,
        introducao: data.introducao,
        conclusao: data.conclusao,
        data: new Date(data.data),
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    em.emit('checklist-editado', { checklist })

    return checklist

}


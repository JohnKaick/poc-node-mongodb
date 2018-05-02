const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkChecklist } = db.models

module.exports = async function (checklistId) {

    // Remover checklist
    await ChkChecklist.findByIdAndRemove(checklistId)

    em.emit('checklist-removido', {})

    return { success: true }

}


const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkChecklist } = db.models

module.exports = async function (checklistId) {

    // Obter checklist
    let checklist = await ChkChecklist.findById(checklistId).populate('projeto')

    em.emit('checklist-obtida', { checklist })

    return checklist

}


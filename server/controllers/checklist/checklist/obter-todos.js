const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkChecklist } = db.models

module.exports = async function (projetoId) {

    // Obtem todos os checklist
    let checklists = await ChkChecklist.find({ projeto: projetoId }).populate('projeto')

    em.emit('checklists-obtidas', { checklists })

    return checklists

}


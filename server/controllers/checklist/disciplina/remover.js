const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkDisciplina } = db.models

module.exports = async function (disciplinaId) {

    // Remover disciplina
    await ChkDisciplina.findByIdAndRemove(disciplinaId)

    em.emit('disciplina-removida', {})

    return { success: true }

}


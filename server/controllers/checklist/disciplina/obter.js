const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkDisciplina } = db.models

module.exports = async function (disciplinaId) {

    // Obter disciplina
    let disciplina = await ChkDisciplina.findById(disciplinaId)

    em.emit('disciplina-obtida', { disciplina })

    return disciplina

}


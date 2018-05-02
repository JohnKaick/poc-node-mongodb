const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkDisciplina } = db.models

module.exports = async function () {

    // Obter todas as disciplinas
    let disciplinas = await ChkDisciplina.find().sort({ 'nome': 1 })

    em.emit('disciplinas-obtidas', { disciplinas })

    return disciplinas

}


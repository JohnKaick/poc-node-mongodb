const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdPasta } = db.models

module.exports = async function (disciplinaId) {

    // Obter pasta
    let pastas = await ChkMdPasta.find({ disciplina: disciplinaId }).populate('disciplina')

    em.emit('mdPasta-obtidas', { pastas })

    return pastas

}


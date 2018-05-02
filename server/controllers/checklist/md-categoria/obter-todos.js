const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdCategoria } = db.models

module.exports = async function (disciplinaId) {

    // Obter categoria
    let categorias = await ChkMdCategoria.find({ disciplina: disciplinaId }).populate('disciplina')

    em.emit('mdCategoria-obtidas', { categorias })

    return categorias

}


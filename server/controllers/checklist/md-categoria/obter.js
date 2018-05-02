const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdCategoria } = db.models

module.exports = async function (mdCategoriaId) {

    // Obter pasta
    let categoria = await ChkMdCategoria.findById(mdCategoriaId).populate('disciplina')

    em.emit('mdCategoria-obtida', { categoria })

    return categoria

}


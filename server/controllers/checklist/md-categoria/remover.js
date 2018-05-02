const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdCategoria } = db.models

module.exports = async function (mdCategoriaId) {

    // Remover categoria
    await ChkMdCategoria.findByIdAndRemove(mdCategoriaId)

    em.emit('mdCategoria-removida', {})

    return { success: true }

}


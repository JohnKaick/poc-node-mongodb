const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdCategoria } = db.models

module.exports = async function (auth, mdCategoriaId, data) {

    // Editar categoria
    let categoria = await ChkMdCategoria.findByIdAndUpdate(mdCategoriaId, {
        nome: data.nome,
        descritivo: data.descritivo,
        editadoPor: auth.usuarioId,
        editadoEm: new Date(),
    }, { new: true })

    em.emit('mdCategoria-cadastrada', { categoria })

    return categoria

}


const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const {
    ChkGrupo
} = db.models

module.exports = async function (projetoId) {

    // Obter todos os grupos
    let grupos = await ChkGrupo
        .find({
            projeto: projetoId
        })
        .populate('projeto')
        .populate('grupo')
        .populate('imagens')

    em.emit('grupos-obtidos', {
        grupos
    })

    return grupos

}
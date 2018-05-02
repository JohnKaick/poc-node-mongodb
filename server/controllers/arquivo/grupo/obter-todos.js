const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqGrupo } = db.models

module.exports = async function (pastaId) {

    // Obtem todos os grupos da pasta
    let grupos = await ArqGrupo.find({ pasta: pastaId }).populate('grupo pasta')

    em.emit('grupos-obtidos', { grupos })

    return grupos

}


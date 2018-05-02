const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqGrupo } = db.models

module.exports = async function (grupoId) {

    // Obter grupo
    let grupo = await ArqGrupo.findById(grupoId).populate('grupo pasta')

    em.emit('grupo-obtido', { grupo })

    return grupo

}


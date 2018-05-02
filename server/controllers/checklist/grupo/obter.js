const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupo } = db.models

module.exports = async function (grupoId) {

    // Obter grupo
    let grupo = await ChkGrupo.findById(grupoId).populate('projeto grupo')

    em.emit('grupo-obtido', { grupo })

    return grupo

}


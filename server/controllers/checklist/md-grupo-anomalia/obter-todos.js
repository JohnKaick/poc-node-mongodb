const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdGrupoAnomalia } = db.models

module.exports = async function (mdPastaId) {

    // Obter elemento anomalia
    let grupos = await ChkMdGrupoAnomalia.find({ pasta: mdPastaId }).populate('disciplina pasta')

    em.emit('mdGrupoAnomalia-obtidas', { grupos })

    return grupos

}


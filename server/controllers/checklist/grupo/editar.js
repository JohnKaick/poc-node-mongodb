const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupo } = db.models

module.exports = async function (auth, grupoId, data) {

    // Editar grupo
    let grupo = await ChkGrupo.findByIdAndUpdate(grupoId, {
        nome: data.nome,
        descritivo: data.descritivo,
        tag: data.tag,
        prefix: data.prefix,
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    em.emit('grupo-editado', { grupo })

    return grupo

}


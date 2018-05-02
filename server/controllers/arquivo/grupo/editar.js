const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqGrupo } = db.models

module.exports = async function (auth, grupoId, data) {

    // Editar grupo
    let grupo = await ArqGrupo.findByIdAndUpdate(grupoId, {
        nome: data.nome,
        mask: data.mask,
        regras: {
            usuario: usuarioId,
            tipo: data.tipo,
            criadoPor: usuarioId,
            criadoEm: new Date()
        },
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    em.emit('grupo-editado', { grupo })

    return grupo

}


const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqGrupo } = db.models

module.exports = async function (auth, data) {

    // Atribuir regra na pasta
    let grupo = await ArqGrupo.findById(data.grupoId)
        .populate({ path: 'regras', match: { usuario: data.usuarioId } })

    let regra = await grupo.regras.map((r) => {
        return {
            usuario: r.usuario,
            tipo: r.tipo
        }
    })

    if (regra.length > 0) {
        await grupo.regras.update({
            tipo: data.tipo || 'block'
        })
    } else {
        await ArqGrupo.create({
            regras: {
                usuario: data.usuarioId,
                tipo: data.tipo || 'block',
                criadoPor: auth.usuarioId,
                criadoEm: new Date(),
                empresa: auth.empresaId
            }
        })
    }

    em.emit('grupo-atribuido', { grupo })

    return { success: true }

}
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqPasta } = db.models

module.exports = async function (auth, data) {

    try {

        // Atribuir regra na pasta
        let pasta = await ArqPasta.findById(data.pastaId)
            .populate({ path: 'regras', match: { usuario: data.usuarioId } })

        let regra = await pasta.regras.map((r) => {
            return {
                usuario: r.usuario,
                tipo: r.tipo
            }
        })

        if (regra.length > 0) {
            await pasta.regras.update({
                tipo: data.tipo || 'block'
            })
        } else {
            await ArqPasta.create({
                regras: {
                    usuario: data.usuarioId,
                    tipo: data.tipo || 'block',
                    criadoPor: auth.usuarioId,
                    criadoEm: new Date(),
                    empresa: auth.empresaId,
                }
            })
        }

        em.emit('pasta-atribuido', { pasta })

        return { success: true }

    } catch (err) {
        console.log(err)
    }

}
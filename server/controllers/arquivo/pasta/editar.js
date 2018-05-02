const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqPasta } = db.models

module.exports = async function (usuarioId, pastaId, data) {

    // Editar pasta
    let pasta = await ArqPasta.findByIdAndUpdate(pastaId, {
        $set: {
            nome: data.nome,
            regras: data.regras,
            //editadoPor: usuarioId,
            editadoEm: new Date()
        }
    }, { new: true })

    em.emit('pasta-editada', { pasta })

    return pasta

}


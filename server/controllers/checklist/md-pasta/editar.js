const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdPasta } = db.models

module.exports = async function (auth, mdPastaId, data) {

    // Editar pasta
    let pasta = await ChkMdPasta.findByIdAndUpdate(mdPastaId, {
        nome: data.nome,
        descritivo: data.descritivo,
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    em.emit('mdPasta-editada', { pasta })

    return pasta

}


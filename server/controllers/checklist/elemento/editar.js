const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElemento } = db.models

module.exports = async function (usuarioId, elementoId, data) {

    // Editar elemento
    let elemento = await ChkElemento.findByIdAndUpdate(elementoId, {
        nome: data.nome,
        descritivo: data.descritivo,
        tag: data.tag,
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    em.emit('elemento-editado', { elemento })

    return elemento

}

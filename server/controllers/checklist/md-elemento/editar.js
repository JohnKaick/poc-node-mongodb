const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElemento } = db.models

module.exports = async function (auth, mdElementoId, data) {

    // Editar elemento
    let elemento = await ChkMdElemento.findByIdAndUpdate(mdElementoId, {
        nome: data.nome,
        descritivo: data.descritivo,
        prefix: data.prefix,
        metodo: data.metodo,
        vidaUtil: data.vidaUtil,
        pesoGut: data.pesoGut,
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    em.emit('mdElemento-editado', { elemento })

    return elemento

}


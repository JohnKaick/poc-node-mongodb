const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElemento, ChkGrupo } = db.models

module.exports = async function (auth, modeloId, data) {

    let grupo = await ChkGrupo.findById(data.grupo)

    // Cadastrar elemento
    let elemento = await ChkElemento.create({
        modelo: modeloId,
        projeto: grupo.projeto,
        grupo: grupo,
        nome: data.nome,
        descritivo: data.descritivo,
        tag: data.tag,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId,
    })

    em.emit('elemento-cadastrado', { elemento })

    return elemento

}


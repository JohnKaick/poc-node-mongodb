const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElemento } = db.models

module.exports = async function (auth, data) {

    // Cadastrar elemento
    let elemento = await ChkMdElemento.create({
        disciplina: data.disciplina,
        pasta: data.pasta,
        grupo: data.grupo,
        nome: data.nome,
        descritivo: data.descritivo,
        prefix: data.prefix,
        metodo: data.metodo,
        vidaUtil: data.vidaUtil,
        pesoGut: data.pesoGut,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId,
    })

    em.emit('mdElemento-cadastrado', { elemento })

    return elemento

}


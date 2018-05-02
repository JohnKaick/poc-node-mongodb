const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupo } = db.models

module.exports = async function (auth, projetoId, data) {

    // Cadastrar grupo
    let grupo = await ChkGrupo.create({
        projeto: projetoId,
        grupo: data.grupo,
        nome: data.nome,
        descritivo: data.descritivo,
        tag: data.tag,
        prefix: data.prefix,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId
    })

    em.emit('grupo-cadastrado', { grupo })

    return grupo

}


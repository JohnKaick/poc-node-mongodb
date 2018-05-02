const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqGrupo, ArqPasta } = db.models

module.exports = async function (auth, pastaId, data) {

    let pasta = await ArqPasta.findById(pastaId)

    // Cadastrar grupo
    let grupo = await ArqGrupo.create({
        empresa: pasta.empresa,
        projeto: pasta.projeto,
        pasta: pastaId,
        grupo: data.grupoId,
        nome: data.nome,
        mask: data.mask,
        regraPadrao: 'read',
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
    })

    em.emit('grupo-cadastrado', { grupo })

    return grupo

}


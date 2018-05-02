const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdGrupoAnomalia, ChkMdPasta } = db.models

module.exports = async function (auth, mdPastaId, data) {

    let pasta = await ChkMdPasta.findById(mdPastaId)

    // Cadastrar grupo anomalia
    let grupo = await ChkMdGrupoAnomalia.create({
        pasta: pasta,
        disciplina: pasta.disciplina,
        exibicao: data.exibicao,
        descritivo: data.descritivo,
        caracteristica: data.caracteristica,
        questao: data.questao,
        diagnostico: data.diagnostico,
        gravidades: {
            nome: data.nome,
            g: data.g,
            u: data.u,
            t: data.t,
        },
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId,
    })

    em.emit('md-grupo-anomalia-cadastrar', { grupo })

    return grupo

}


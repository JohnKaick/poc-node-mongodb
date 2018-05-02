const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElementoAnomalia, ChkMdElemento } = db.models

module.exports = async function (auth, mdElementoId, data) {

    let elemento = await ChkMdElemento.findById(mdElementoId)

    // Cadastrar elemento anomalia
    let anomalia = await ChkMdElementoAnomalia.create({
        elemento: elemento,
        disciplina: elemento.disciplina,
        pasta: elemento.pasta,
        exibicao: data.exibicao,
        descritivo: data.descritivo,
        caracteristica: data.caracteristica,
        questao: data.questao,
        diagnostico: data.diagnostico,
        gravidades: data.gravidades,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId
    })

    em.emit('md-elemento-anomalia-cadastrar', { anomalia })

    return anomalia

}


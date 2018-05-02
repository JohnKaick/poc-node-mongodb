const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElementoAnomalia } = db.models

module.exports = async function (auth, mdElementoAnomaliaId, data) {

    // Editar elemento anomalia
    let elemento = await ChkMdElementoAnomalia.findByIdAndUpdate(mdElementoAnomaliaId, {
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
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    em.emit('mdElementoAnomalia-editada', { elemento })

    return elemento

}


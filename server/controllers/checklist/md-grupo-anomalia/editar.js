const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdGrupoAnomalia } = db.models

module.exports = async function (auth, mdGrupoAnomaliaId, data) {

    // Editar grupo anomalia
    let grupo = await ChkMdGrupoAnomalia.findByIdAndUpdate(mdGrupoAnomaliaId, {
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

    em.emit('mdGrupoAnomalia-editada', { grupo })

    return grupo

}


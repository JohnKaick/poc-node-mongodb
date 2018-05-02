const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupoAnomalia } = db.models

module.exports = async function (auth, grupoAnomaliaId, data) {

    // Obter grupo-anomalia
    let anomalia = await ChkGrupoAnomalia.findByIdAndUpdate(grupoAnomaliaId, {
        comentarios: data.comentarios,
        situacao: data.situacao,
        classificacao: data.classificacao,
        falha: data.falha,
        gravidade: {
            nome: data.nome,
            g: data.g,
            u: data.u,
            t: data.t,
            //referencia: data.referencia
        },
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    em.emit('grupo-anomalia-editado', { anomalia })

    return anomalia

}


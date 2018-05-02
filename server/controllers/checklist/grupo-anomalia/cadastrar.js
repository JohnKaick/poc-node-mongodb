const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupoAnomalia, ChkGrupo } = db.models

module.exports = async function (auth, modeloId, data) {

    let grupo = await ChkGrupo.findById(data.grupo)

    // Obter grupo-anomalia
    let anomalia = await ChkGrupoAnomalia.create({
        modelo: modeloId,
        projeto: grupo.projeto,
        checklist: data.checklist,
        grupo: grupo,
        comentarios: data.comentarios,
        situacao: data.situacao,
        classificacao: data.classificacao,
        falha: data.falha,
        gravidade: {
            nome: data.nome,
            g: data.g,
            u: data.u,
            t: data.t,
            //referencia: 
        },
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId,
    })

    em.emit('grupo-anomalia-cadastrado', { anomalia })

    return anomalia

}


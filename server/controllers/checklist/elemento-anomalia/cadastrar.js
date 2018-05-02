const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElementoAnomalia, ChkElemento, ChkMdElementoAnomalia } = db.models

module.exports = async function (auth, modeloId, data) {

    let elemento = await ChkElemento.findById(data.elemento)

    // Cadastrar elemento-anomalia
    let anomalia = await ChkElementoAnomalia.create({
        modelo: modeloId,
        projeto: elemento.projeto,
        checklist: data.checklist,
        grupo: elemento.grupo,
        elemento: elemento,
        comentarios: data.comentarios,
        situacao: data.situacao,
        classificacao: data.classificacao,
        falha: data.falha,
        gravidade: {
            nome: data.nome,
            g: data.g,
            u: data.u,
            t: data.t
            //referencia: 
        },
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId
    })

    em.emit('elemento-anomalia-cadastrar', { anomalia })

    return anomalia

}


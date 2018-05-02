const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElementoAnomalia, ChkElemento, ChkMdElementoAnomalia } = db.models

module.exports = async function (auth, elementoAnomaliaId, data) {

    // Editar elemento-anomalia
    let anomalia = await ChkElementoAnomalia.findByIdAndUpdate(elementoAnomaliaId, {
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
        editadoPor: auth.usuarioId,
        editadoEm: new Date(),
        empresa: auth.empresaId
    }, { new: true })

    em.emit('elemento-anomalia-editar', { anomalia })

    return anomalia

}


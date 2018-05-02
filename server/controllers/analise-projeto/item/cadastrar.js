const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprItem, AprRelatorio } = db.models

module.exports = async function (auth, relatorioId, data) {

    let relatorio = await AprRelatorio.findById(relatorioId)

    let posicaoQuery = await AprItem.findOne({ relatorio: relatorioId }).select('posicao').sort({ posicao: -1 }).limit(1)
    let posicao = posicaoQuery ? posicaoQuery.posicao : 0

    // Cadastrar item
    let item = await AprItem.create({
        empresa: relatorio.empresa,
        projeto: relatorio.projeto,
        relatorio: relatorioId,
        escopo: data.escopo,
        anomalia: data.anomalia,
        assunto: data.assunto,
        situacao: data.situacao,
        posicao: posicao + 1,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date(),        
    })

    return item

}
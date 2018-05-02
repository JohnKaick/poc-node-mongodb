const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprRelatorio, AprItem } = db.models

module.exports = async function (auth, relatorioId) {

    let relatorio = await AprRelatorio.findById(relatorioId)

    let itens = await AprItem.find({ situacao: { '$ne': 'finalizado' } }).where({ relatorio: relatorioId })

    let novoRelatorio = await new AprRelatorio({
        empresa: relatorio.empresa,
        projeto: relatorio.projeto,
        titulo: relatorio.titulo + ' - (Revisão)',
        revisao: relatorio.revisao,
        data: new Date(),
        indice: relatorio.indice + 1,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date()
    })

    await novoRelatorio.save()

    let posicaoQuery = await AprItem.findOne({ relatorio: relatorioId }).select('posicao').sort({ posicao: -1 }).limit(1)
    let posicao = posicaoQuery ? posicaoQuery.posicao : 0
    let novaPosicao = posicao

    for (let item of itens) {

        await AprItem.create({
            empresa: relatorio.empresa,
            projeto: relatorio.projeto,
            relatorio: novoRelatorio,
            escopo: item.escopo,
            anomalia: item.anomalia,
            assunto: item.assunto,
            situacao: item.situacao,
            posicao: posicao === novaPosicao ? novaPosicao += 1 : novaPosicao,
            criadoPor: auth.usuarioId,
            criadoEm: new Date(),
            editadoEm: new Date(),
        })

        novaPosicao += 1

    }

    return novoRelatorio
}
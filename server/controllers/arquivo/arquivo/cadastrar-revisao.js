const uuid = require('uuid')

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqArquivo, ArqRevisao } = db.models

module.exports = async function (auth, arquivoId, data) {

    let arquivo = await ArqArquivo.findById(arquivoId)

    let ultimaRevisao = await ArqRevisao
        .find({ arquivo: arquivoId })
        .limit(1)
        .sort({ criadoEm: -1 })

    let revisao = await new ArqRevisao({
        empresa: arquivo.empresa,
        projeto: arquivo.projeto,
        arquivo: arquivo._id,
        numero: ultimaRevisao.numero,
        nomenclatura: ultimaRevisao.nomenclatura,
        revisao: ultimaRevisao.revisao,
        assunto: ultimaRevisao.assunto,
        descricao: ultimaRevisao.descricao,
        emissao: new Date(),
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: ultimaRevisao.empresa
    })

    await revisao.save()

    em.emit('arquivo-revisao-cadastrado', { arquivo, revisao })

    return revisao

}
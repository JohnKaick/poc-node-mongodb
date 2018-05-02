const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprArquivoAnalisado, AprRelatorio } = db.models

module.exports = async function (auth, relatorioId, data) {

    let relatorio = await AprRelatorio.findById(relatorioId)

    // Cadastrar arquivo
    let arquivo = await AprArquivoAnalisado.create({
        empresa: relatorio.empresa,
        projeto: relatorio.projeto,
        relatorio: relatorioId,
        desenho: data.desenho,
        descricao: data.descricao,
        arquivo: data.arquivo,
        revisao: data.revisao,
        data: new Date(data.emissao),
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date()
    })

    return arquivo

}
const uuid = require('uuid')

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqGrupo, ArqArquivo, ArqRevisao } = db.models

module.exports = async function (auth, grupoId, data) {

    let grupo = await ArqGrupo.findById(grupoId)

    // Cadastrar arquivo e revisao
    let arquivo = await new ArqArquivo({
        empresa: grupo.empresa.toString(),
        projeto: grupo.projeto.toString(),
        grupo: grupoId,
        situacao: 'disponivel',
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
    })

    let revisao = await new ArqRevisao({
        empresa: grupo.empresa.toString(),
        projeto: grupo.projeto.toString(),
        numero: data.numero,
        nomenclatura: data.nomenclatura,
        revisao: data.revisao,
        assunto: data.assunto,
        descricao: data.descricao,
        emissao: new Date(data.emissao),
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
    })

    if (!data.arquivoId) {
        await arquivo.save()
        revisao.arquivo = arquivo
        await revisao.save()
    } else {
        revisao.arquivo = data.arquivoId
        await revisao.save()
    }

    em.emit('arquivo-revisao-cadastrado', { arquivo, revisao })

    return revisao

}
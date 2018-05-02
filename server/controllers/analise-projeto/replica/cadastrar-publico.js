const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprToken, AprItem } = db.models

module.exports = async function (token, data) {

    let auth = await AprToken.findById(token)
    if (!auth || new Date() > auth.validade) throw new eh.KnownError('unauthorized', 'token_invalid')

    let item = await AprItem.findById(data.itemId)

    // Cadastrar no modo publico a replica
    await item.replicas.push({
        empresa: item.empresa,
        projeto: item.projeto,
        token: auth,
        participante: auth.participante,
        item: data.itemId,
        mensagem: data.mensagem,
        situacaoSugerida: data.situacaoSugerida ? data.situacaoSugerida : 'pendente',
        criadoEm: new Date(),
        editadoEm: new Date(),
    })

    item.save()

    return { success: true }

}
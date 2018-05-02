const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprItem } = db.models

module.exports = async function (auth, itemId, data) {

    let item = await AprItem.findById(itemId)

    // Cadastrar replica
    item.replicas.push({
        mensagem: data.mensagem,
        situacaoSugerida: data.situacaoSugerida ? data.situacaoSugerida : 'pendente',
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date()
    })

    await item.save()

    return item

}
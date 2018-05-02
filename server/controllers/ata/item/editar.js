const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaItem } = db.models

module.exports = async function (auth, itemId, data) {

    // Editar item
    let item = await AtaItem.findByIdAndUpdate(itemId, {
        assunto: data.assunto,
        descricao: data.descricao,
        responsavel: data.responsavel,
        prazo: data.prazo ? data.prazo : null,
        situacao: data.situacao,
        indice: data.indice,
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    return item

}


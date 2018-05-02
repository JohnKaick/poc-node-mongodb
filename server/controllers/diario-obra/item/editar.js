const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioItem } = db.models

module.exports = async function (auth, itemId, data) {

    // Editar diario-obra item
    let item = await DioItem.findByIdAndUpdate(itemId, {
        $set: {
            assunto: data.assunto,
            descricao: data.descricao,
            responsavel: data.responsavel,
            situacao: data.situacao,
            editadoPor: auth.usuarioId,
            editadoEm: new Date(),
        }
    }, { new: true })

    return item
}
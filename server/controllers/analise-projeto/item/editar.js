const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprItem } = db.models

module.exports = async function (auth, itemId, data) {

    // Editar item
    let item = await AprItem.findByIdAndUpdate(itemId, {
        $set: {
            assunto: data.assunto,
            situacao: data.situacao,
            escopo: data.escopo,
            anomalia: data.anomalia,
            editadoPor: auth.usuarioId,
            editadoEm: new Date(),
        }
    }, { new: true })

    return item

}
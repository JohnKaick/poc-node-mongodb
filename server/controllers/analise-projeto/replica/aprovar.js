const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprItem } = db.models

module.exports = async function (usuarioId, itemId, replicaId) {

    // Aprovar replica
    let item = await AprItem.findById(itemId)

    for (i in item.replicas) {
        if (item.replicas[i].id === replicaId) {
            item.replicas[i].aprovadoPor = usuarioId
            break
        }
    }

    await item.save()

    return { success: true }

}
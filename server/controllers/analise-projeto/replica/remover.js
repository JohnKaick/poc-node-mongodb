const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprItem } = db.models

module.exports = async function (itemId, replicaId) {

    // Remover replica
    let item = await AprItem.findById(itemId)

    for (i in item.replicas) {
        if (item.replicas[i].id === replicaId) {
            item.replicas[i].remove()
            break
        }
    }

    await item.save()

    return { success: true }

}
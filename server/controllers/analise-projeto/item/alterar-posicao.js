const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprItem } = db.models

module.exports = async function (auth, itemA, itemB) {

    // Alterar posição item
    let _itemA = await AprItem.findById(itemA)
    let _itemB = await AprItem.findById(itemB)

    let posicaoA = _itemA.posicao
    let posicaoB = _itemB.posicao

    _itemA.posicao = posicaoB
    _itemB.posicao = posicaoA

    _itemA.save()
    _itemB.save()

    return { success: true }

}
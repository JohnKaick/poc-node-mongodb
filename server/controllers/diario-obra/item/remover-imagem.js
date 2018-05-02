const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioItem, DioRegistro, IdeImagem } = db.models
const { deleteBlob } = require('common/aws')

module.exports = async function (imagemId) {

    let imagem = await IdeImagem.findById(imagemId)
    let item = await DioItem.findOne({ imagens: imagem }).populate('imagens')

    // Remover imagem do Blob
    let blob = await deleteBlob(imagem.key)

    // Remover dados da imagem
    await IdeImagem.findByIdAndRemove(imagemId)

    // Remover dados da imagem dentro do item, para não fica referenciando o id
    for (i in item.imagens) {
        if (item.imagens[i].id === imagemId) {
            item.imagens[i].remove()
            break
        }
    }

    return { success: true }
}

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto, IdeImagem } = db.models
const { deleteBlob } = require('common/aws')

async function excluir(projeto, imagemId) {
    // Remover dados da imagem
    await IdeImagem.findByIdAndRemove(imagemId)

    // Remover dados da imagem dentro do projeto, para não fica referenciando o id
    for (i in projeto.imagens) {
        if (projeto.imagens[i].id === imagemId) {
            projeto.imagens[i].remove()
            break
        }
    }

    return { success: true }
}

module.exports = async function (imagemId) {

    let imagem = await IdeImagem.findById(imagemId)
    let projeto = await IdeProjeto.findOne({ imagens: imagem }).populate('imagens')

    /*
    * Se o registro for AWS, apagar também no blob S3, 
    * se caso for Azure apagar apenas o registro.
    */

    if (imagem.srcVersion === 'azure') {
        await excluir(projeto, imagemId)
    } else {
        let blob = await deleteBlob(imagem.key)
        await excluir(projeto, imagemId)
    }

    return { success: true }
}
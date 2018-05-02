const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioItem, DioRegistro, IdeImagem } = db.models
const { uploadBlob } = require('common/aws')
const uuid = require('uuid')
const obterFileKey = require('./obter-file-key')

module.exports = async function (usuarioId, itemId, request, file) {

    let query = request.query

    let item = await DioItem.findById(itemId).populate('empresa projeto')

    let token = uuid.v4()
    let key = await obterFileKey(item.empresa.id, item.projeto.id, token)
    let blob = await uploadBlob(key, file, { ACL: 'public-read' })

    let imagem = await IdeImagem.create({
        empresa: item.empresa.id,
        projeto: item.projeto.id,
        tamanho: query.size,
        tipo: 'diario-obra',
        extensao: '.jpg',
        token: token,
        key: key,
        url: blob.Location,
        carregadoEm: new Date(),
        carregadoPor: usuarioId,
    })

    item.imagens.push(imagem)

    await item.save()

    return file
}

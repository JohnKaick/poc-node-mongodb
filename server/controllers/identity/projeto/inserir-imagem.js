const eh = require('common/error-handler')
const uuid = require('uuid')
const db = require('database')
const { IdeProjeto, IdeImagem } = db.models
const { uploadBlob } = require('common/aws')
const obterFileKey = require('./obter-file-key')

module.exports = async function (usuarioId, projetoId, request, file) {

    let query = request.query

    let projeto = await IdeProjeto.findById(projetoId).populate('empresa')
    if (!projeto) throw new eh.KnownError('notFound', 'Projeto inexistente.')

    let token = uuid.v4()
    let key = obterFileKey(projeto.empresa.id, projeto.id, token)
    let blob = await uploadBlob(key, file, { ACL: 'public-read' })

    let imagem = await IdeImagem.create({
        empresa: projeto.empresa.id,
        projeto: projeto.id,
        tamanho: query.size,
        tipo: 'projeto',
        extensao: '.jpg',
        token: token,
        key: key,
        url: blob.Location,
        carregadoEm: new Date(),
        carregadoPor: usuarioId,
    })

    projeto.imagens.push(imagem)

    await projeto.save()

    return file

}
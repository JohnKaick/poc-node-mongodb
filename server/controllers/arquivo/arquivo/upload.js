const _ = require('lodash')
const fs = require('fs')
const path = require('path');
const uuid = require('uuid')
const eh = require('common/error-handler')
const em = require('common/emitter')
const { uploadBlob } = require('common/aws')
const { ArqRevisao } = require('database').models
const obterFileKey = require('./obter-file-key')

module.exports = async function (auth, revisaoId, request) {

    let query = request.query

    // extrai a extensão do arquivo
    let extensao = '.' + (/(?:\.([^.]+))?$/.exec(query.name)[1])

    // obtem a revisão relacionada
    let revisao = await ArqRevisao.findById(revisaoId)

    // se não encontrou uma revisão, erro.
    if (!revisao) { throw new eh.KnownError('notFound', 'revisao_notFound') }

    // verifica se existe está extensao cadastrada no arquivo
    let file = _.find(revisao.files, { extensao: query.extensao })

    // caso já exista, o que fazer?
    // if (fileExistente) { throw new eh.KnownError('notFound', 'revisao_exists') }

    if (!file) {

        file = {
            tamanho: query.size,
            mime: query.type,
            extensao: extensao,
            carregadoEm: new Date(),
            token: uuid()
        }

        revisao.files.push(file)

        await revisao.save()

    } else {

        file.tamanho = query.size
        file.carregadoEm = query.size

        await revisao.update({
            _id: revisao._id,
            'files.token': file.token
        }, {
                '$set': {
                    'files.$.tamanho': file.tamanho,
                    'files.$.carregadoEm': file.carregadoEm
                }
            }
        )

    }

    let key = obterFileKey(revisao.empresa, revisao.projeto, revisao.arquivo, file.token)

    await uploadBlob(key, request.payload, query.size)

    // Salvar os dados do file

    return { success: true }

}
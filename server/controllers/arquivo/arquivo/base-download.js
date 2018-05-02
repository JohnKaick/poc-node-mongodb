const _ = require('lodash')
const { existeBlob, getBlobStream } = require('common/aws')
const obterFileKey = require('./obter-file-key')

const getBlob = async (key) => {

    // verifica se o blob existe
    let exists = await existeBlob(key)

    if (!exists) throw new eh.KnownError('notFound', 'blob_notFound')

    // obtem o blob
    return await getBlobStream(key)

}

module.exports = async function (revisao, tipo) {

    // caso a revisão não tenha um arquivo...
    if (!revisao.files || revisao.files.length === 0) {
        throw new eh.KnownError('notFound', 'revisao_tipo_notFound')
    }

    // tenta obter o arquivo pela extensão, ex: '.pdf' ou '.img'
    let file = _.find(revisao.files, { extensao: tipo })

    // caso não encontre um arquivo, pega a primeira opção cadastrada
    if (!file) {
        file = revisao.files[0]
    }

    // versão antiga

    if (file.oldToken) {

        // chave no padrão antigo
        let key = 'svc-driver/' + file.oldToken

        return {
            stream: await getBlob(key),
            filename: revisao.nomenclatura + file.extensao
        }

    }

    // versão nova

    else {

        // chave no padrão novo
        let key = obterFileKey(revisao.empresa, revisao.projeto, revisao.arquivo, file.token)

        return {
            stream: await getBlob(key),
            filename: revisao.nomenclatura + file.extensao
        }

    }

}
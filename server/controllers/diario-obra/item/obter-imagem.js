const { existeBlob, getBlobStream } = require('common/aws')
const db = require('database')
const { IdeImagem } = db.models

const getAzureKey = (imagem) => {
    if (imagem.srcVersion === 'old-driver') {
        return 'svc-driver/' + imagem.token
    } else {
        return 'wisein/empresas/' + imagem.empresa + '/' + imagem.projeto + '/diario-obra/imagens/' + imagem.id
    }
}

module.exports = async function (id) {

    /*
    let imagem = await IdeImagem.findById(id)

    let key = getAzureKey(imagem)

    return {
        stream: await getBlob(key),
        filename: imagem.id + '.jpg'
    }
    */

    throw new Error('Not implemented.')

}
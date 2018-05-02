const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const fs = require('fs')

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElementoAnomalia, ChkImagem } = db.models

module.exports = async function (auth, elementoAnomaliaId, file, headers) {

    await AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    })

    let anomalia = await ChkElementoAnomalia.findById(elementoAnomaliaId)

    let imagem = await ChkImagem.create({
        projeto: anomalia.projeto,
        tamanho: headers['file-size'],
        tipo: headers['file-type'],
        mime: headers['file-type'] && headers['file-type'].length > 0 ? headers['file-type'] : null,
        token: headers['token'],
        carregado: auth.usuarioId,
        carregadoEm: new Date(),
        empresa: auth.empresaId
    })

    // Upload de imagem
    await s3.upload({
        Bucket: process.env.BUCKET_NAME,
        Key: 'elemento-anomalia/' + elementoAnomaliaId + '/' + imagem._id,
        Body: fs.createReadStream(file.path),
    }, (err, data) => {
        if (err) return err
        return data
    })

    await anomalia.save({ imagens: imagem })

    em.emit('elemento-anomalia-imagem', { file })

    return { success: true }
}
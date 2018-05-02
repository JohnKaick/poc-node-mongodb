const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const fs = require('fs')

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkGrupoAnomalia, ChkImagem } = db.models

module.exports = async function (auth, grupoAnomaliaId, file, headers) {

    await AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    })

    let anomalia = await ChkGrupoAnomalia.findById(grupoAnomaliaId)

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
        Key: 'grupo-anomalia/' + grupoAnomaliaId + '/' + imagem._id,
        Body: fs.createReadStream(file.path),
    }, (err, data) => {
        if (err) return err
        return data
    })

    await anomalia.save({ imagens: imagem })

    em.emit('grupo-anomalia-imagem', { file })

    return { success: true }
}
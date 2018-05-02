const fs = require('fs')
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const s3 = new AWS.S3()

module.exports.existeBlob = async function (key) {
    return new Promise((resolve, reject) => {
        s3.headObject({
            Bucket: process.env.AWS_BUCKET,
            Key: key
        }, (err, data) => {
            if (err && err.code === 'NotFound') {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}

module.exports.getBlobStream = async function (key) {
    return s3.getObject({
        Bucket: process.env.AWS_BUCKET,
        Key: key
    }).createReadStream()
}

module.exports.uploadBlob = async function (key, file, config) {

    let cnf = config || {}

    return new Promise((resolve, reject) => {

        let params = Object.assign({}, {
            Bucket: process.env.AWS_BUCKET,
            Key: key,
            Body: fs.createReadStream(file.path),
            ContentLength: file.bytes,
        }, cnf)

        s3.upload(params, (err, data) => {
            if (err) {
                return reject(err)
            } else {
                resolve(data)
            }
        })

    })
}

module.exports.deleteBlob = async function (key) {

    return new Promise((resolve, reject) => {

        var params = {
            Bucket: process.env.AWS_BUCKET,
            Key: key
        };

        s3.deleteObject(params, function (err, data) {
            if (err) {
                return reject(err)
            } else {
                resolve(data)
            }
        })

    })
}

module.exports.s3 = s3
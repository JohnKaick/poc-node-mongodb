const Promise = require('bluebird')
const os = require('os')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const uuid = require('uuid')

const { ArqArquivo, ArqRevisao } = require('database').models

const baseDownload = require('./base-download')

const syncFile = (writeStream, readStream) => {
    return new Promise((resolve, reject) => {
        readStream.pipe(writeStream)
        writeStream.on('done', () => {
            resolve()
        })
        writeStream.on('error', (err) => {
            reject(err)
        })
    })
}

const sincronizarUltimaVersaoArquivo = async (baseDir, arquivo) => {

    let revisao = await ArqRevisao
        .findOne({ arquivo: arquivo._id })
        .limit(1)
        .sort({ criadoEm: -1 })

    if (!revisao) return null

    // para cada tipo....

    let result = Promise.map(revisao.files, async file => {

        let fileResult = await baseDownload(revisao, file.extensao)

        let fileDir = path.resolve(baseDir, fileResult.filename)

        let writeStream = fs.createWriteStream(fileDir)

        return new Promise((resolve, reject) => {
            fileResult.stream
                .pipe(writeStream)
                .on('finish', () => {
                    resolve({
                        arquivo, revisao, fileDir, fileResult
                    })
                })
                .on('error', (err) => {
                    reject(err)
                })
        })

    })

    return await result
}

module.exports = async function (grupoId, tipos) {

    // gera um código exclusivo desta compactação...
    let packageId = uuid()

    // cria um diretório temporário para sincronização dos arquivos..
    let dirBase = path.resolve(os.tmpdir(), packageId)

    fs.mkdirSync(dirBase)

    // Obterm todos os arquivos do grupo..
    let arquivos = await ArqArquivo.find({ grupo: grupoId })

    return await Promise.map(arquivos, arquivo => {
        return sincronizarUltimaVersaoArquivo(dirBase, arquivo)
    })

}
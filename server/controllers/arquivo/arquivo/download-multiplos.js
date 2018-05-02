
const os = require('os')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const uuid = require('uuid')
const archiver = require('archiver')

const eh = require('common/error-handler')
const em = require('common/emitter')

const sincronizarArquivos = require('./sincronizar-arquivos')

module.exports = async function (auth, grupoId, tipos, request) {

    // resultado da sincronização de todos os arquivos... [[matriz]]
    let revisoes = await sincronizarArquivos(grupoId, tipos)

    // diretório do arquivo zip
    let diretorioZip = path.resolve(os.tmpdir(), uuid() + '.zip')

    // stream do arquivo zip
    let stream = fs.createWriteStream(diretorioZip);

    // instancia o zip
    let zip = archiver.create('zip', {});

    const cbZip = new Promise((resolve, reject) => {

        zip.on('end', function () {
            resolve(fs.createReadStream(diretorioZip));
        });

        zip.on('error', function (err) {
            reject('Erro ao construir zip', err);
        });

        zip.pipe(stream)

    })

    revisoes.map(revisao => {
        revisao.map(arq => {
            zip.file(arq.fileDir, {
                name: arq.fileResult.filename
            })
        })
    })

    zip.finalize()

    return await cbZip

}
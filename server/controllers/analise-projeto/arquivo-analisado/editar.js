const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprArquivoAnalisado } = db.models

module.exports = async function (auth, arquivoId, data) {

    // Editar arquivo
    let arquivo = await AprArquivoAnalisado.findByIdAndUpdate(arquivoId, {
        $set: {
            desenho: data.desenho,
            descricao: data.descricao,
            arquivo: data.arquivo,
            revisao: data.revisao,
            data: new Date(data.emissao),
            editadoPor: auth.usuarioId,
            editadoEm: new Date(),
        }
    }, { new: true })

    return arquivo

}
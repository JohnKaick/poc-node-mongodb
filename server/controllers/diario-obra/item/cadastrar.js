const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioItem, DioRegistro } = db.models

module.exports = async function (auth, diarioId, data) {

    let registro = await DioRegistro.findById(diarioId)

    // Cadastrar diario-obra item
    let item = await DioItem.create({
        empresa: registro.empresa,
        projeto: registro.projeto,
        diario: diarioId,
        assunto: data.assunto,
        descricao: data.descricao,
        responsavel: data.responsavel,
        situacao: data.situacao,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date()
    })

    return item
}
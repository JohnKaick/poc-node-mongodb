const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaItem, AtaRegistro } = db.models

module.exports = async function (auth, ataId, data) {

    let registro = await AtaRegistro.findById(ataId)

    // Cadastrar item
    let item = await AtaItem.create({
        empresa: registro.empresa,
        projeto: registro.projeto,
        ata: ataId,
        assunto: data.assunto,
        descricao: data.descricao,
        responsavel: data.responsavel,
        prazo: data.prazo ? data.prazo : null,
        situacao: data.situacao,
        revisao: 0,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date()
    })

    return item

}


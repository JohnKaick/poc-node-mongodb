const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioRegistro, DioItem } = db.models

module.exports = async function (auth, diarioId) {

    let diario = await DioRegistro.findById(diarioId)

    let itens = await DioItem.find({ situacao: { '$ne': 'finalizada' } }).where({ diario: diarioId })

    let novoDiario = await new DioRegistro({
        projeto: diario.projeto,
        descricao: diario.descricao,
        local: diario.local + ' - (Revisão)',
        dataHora: new Date(),
        responsavel: diario.responsavel,
        master: diario.master ? diario.master : diario._id,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date(),
        empresa: auth.empresaId
    })

    await novoDiario.save()

    for (let item of itens) {
        await DioItem.create({
            diario: novoDiario,
            assunto: item.assunto,
            descricao: item.descricao,
            responsavel: item.responsavel,
            situacao: item.situacao,
            master: item.master ? item.master : item._id,
            criadoPor: auth.usuarioId,
            criadoEm: new Date(),
            editadoEm: new Date(),
            empresa: auth.empresaId
        })
    }

    return novoDiario
}
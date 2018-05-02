const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaRegistro, AtaParticipante, AtaItem } = db.models

module.exports = async function (auth, ataId) {

    let ata = await AtaRegistro.findById(ataId)

    let itens = await AtaItem.find({ situacao: { '$ne': 'finalizada' } }).where({ ata: ataId })

    let novaAta = await new AtaRegistro({
        projeto: ata.projeto,
        dataHora: new Date(),
        nome: ata.nome + ' - (Revisão)',
        local: '',
        pauta: '',
        numero: ata.numero + 1,
        situacao: 'iniciada',
        master: ata.master ? ata.master : ata._id,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date(),
        empresa: auth.empresaId
    })

    await novaAta.save()

    for (let item of itens) {
        await AtaItem.create({
            ata: novaAta,
            assunto: item.assunto,
            descricao: item.descricao,
            responsavel: item.responsavel,
            prazo: item.prazo,
            situacao: item.situacao,
            indice: item.indice,
            revisao: item.revisao,
            master: item.master ? item.master : item._id,
            criadoPor: auth.usuarioId,
            criadoEm: new Date(),
            editadoEm: new Date(),
            empresa: auth.empresaId
        })
    }

    return novaAta
}

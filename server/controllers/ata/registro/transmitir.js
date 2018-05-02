const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaRegistro, AtaParticipante, AtaItem } = db.models

module.exports = async function (ataId) {

    let ata = await AtaRegistro.findById(ataId).populate('projeto empresa')

    let parts = await AtaParticipante
        .find({ ata: ataId })
        .populate('colaborador')
        .sort({ 'colaborador.nome': 'asc' })

    let participantes = await parts.map(p => {
        return {
            nome: p.colaborador.nome,
            email: p.colaborador.email,
            area: p.colaborador.area,
            empresa: p.colaborador.cliente,
            presente: p.presente
        }
    })

    let itens = await AtaItem.find({ ata: ataId })

    em.emit('ata-transmitir', { ata, participantes, itens })

    return { success: true }
}
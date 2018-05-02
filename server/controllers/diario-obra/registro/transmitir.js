const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioRegistro, DioParticipante, DioItem } = db.models

module.exports = async function (diarioId) {

    let diario = await DioRegistro.findById(diarioId).populate('projeto empresa')

    let parts = await DioParticipante
        .find({ diario: diarioId })
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

    let itens = await DioItem.find({ diario: diarioId })

    em.emit('diario-obra-transmitir', { diario, participantes, itens })

    return { sucess: true }

}
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprParticipante } = db.models
const _ = require('lodash')

module.exports = async function (relatorioId) {

    // Obtem participantes
    let participantes = await AprParticipante.find({ relatorio: relatorioId }).populate('colaborador')

    let result = await _
        .chain(participantes)
        .map(function (p) {
            return {
                _id: p._id,
                nome: p.colaborador.nome,
                sobrenome: p.colaborador.sobrenome,
                email: p.colaborador.email,
                empresa: p.colaborador.empresa,
                cliente: p.colaborador.cliente,
                responsavel: p.responsavel,
                criadoPor: p.criadoPor,
                colaborador: p.colaborador.id
            }
        })
        .orderBy('nome', 'asc')
        .value()

    return result

}


const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprRelatorio, AprArquivoAnalisado, AprItem, AprParticipante } = db.models
const filtrar = require('./helpers/filtrar')
const organizar = require('./helpers/organizar')

module.exports = async function (relatorioId) {

    let relatorio = await AprRelatorio.findById(relatorioId).populate('projeto empresa')
    relatorio.indice += 1
    relatorio.fechadaEm = new Date()
    relatorio.save()

    let parts = await AprParticipante
        .find({ relatorio: relatorioId })
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

    let arquivos = await AprArquivoAnalisado
        .find({ relatorio: relatorioId })
        .sort({ arquivo: 'asc' })

    let itens = await AprItem
        .find({ relatorio: relatorioId })
        .populate('replicas.criadoPor')
        .sort({ posicao: 1, 'replicas.criadoEm': -1 })


    let filtrado = await filtrar(itens)
    let grupos = await organizar(filtrado)

    em.emit('analise-projeto-transmitir', { relatorio, participantes, arquivos, grupos })

    return { success: true }

}


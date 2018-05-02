const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprParticipante, AprRelatorio, IdeColaborador } = db.models
const definirPermissao = require('./../../identity/permissao/definir-permissao')

module.exports = async function (auth, relatorioId, participanteId, responsavel) {

    let relatorio = await AprRelatorio.findById(relatorioId)

    let colaborador = await IdeColaborador.findById(participanteId)

    let participante = await AprParticipante.create({
        projeto: relatorio.projeto,
        empresa: relatorio.empresa,
        relatorio: relatorioId,
        colaborador: participanteId,
        responsavel: responsavel,
        criadoPor: auth.usuarioId,
        criadoEm: new Date()
    })

    await definirPermissao(
        auth.usuarioId,
        colaborador.email,
        relatorio.projeto,
        'anl',
        'rel',
        relatorio.id,
        'read-reply'
    )

    return participante

}


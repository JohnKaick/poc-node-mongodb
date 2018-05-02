const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioRegistro } = db.models

module.exports = async function (auth, projetoId, data) {

    // Cadastrar diario-obra
    let diario = await DioRegistro.create({
        empresa: auth.empresaId,
        projeto: projetoId,
        descricao: data.descricao,
        local: data.local,
        responsavel: data.responsavel,
        dataHora: data.dataHora,
        tempoManha: data.tempoManha ? data.tempoManha : 'limpo',
        tempoTarde: data.tempoTarde ? data.tempoTarde : 'limpo',
        tempoNoite: data.tempoNoite ? data.tempoNoite : 'limpo',
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date()
    })

    return diario

}
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaRegistro } = db.models

module.exports = async function (auth, projetoId, data) {

    // Cadastrar ata
    let ata = await AtaRegistro.create({
        empresa: auth.empresaId,
        projeto: projetoId,
        dataHora: new Date(data.dataHora),
        nome: data.nome,
        local: data.local,
        pauta: data.pauta,
        numero: 0,
        situacao: data.situacao ? data.situacao : 'iniciada',
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date()
    })

    return ata

}


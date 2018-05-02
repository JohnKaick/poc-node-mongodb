const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaParticipante, AtaRegistro } = db.models

module.exports = async function (auth, ataId, participanteId, presente) {

    let ata = await AtaRegistro.findById(ataId)

    // Vincular participante
    let participante = await AtaParticipante.create({
        projeto: ata.projeto,
        empresa: ata.empresa,
        ata: ataId,
        colaborador: participanteId,
        presente: presente,
        criadoPor: auth.usuarioId,
        criadoEm: new Date()        
    })

    return participante

}


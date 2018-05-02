const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaRegistro } = db.models

module.exports = async function (auth, ataId, data) {

    //  Editar ata
    let ata = await AtaRegistro.findByIdAndUpdate(ataId, {
        dataHora: new Date(data.dataHora),
        nome: data.nome,
        local: data.local,
        pauta: data.pauta,
        editadoPor: auth.usuarioId,
        editadoEm: new Date()
    }, { new: true })

    return ata

}


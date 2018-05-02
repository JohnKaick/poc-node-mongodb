const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AtaRegistro } = db.models

module.exports = async function (projetoId) {

    // Obtem atas do projeto
    let atas = await AtaRegistro.find({ projeto: projetoId }).sort({ dataHora: 'desc' })

    return atas

}


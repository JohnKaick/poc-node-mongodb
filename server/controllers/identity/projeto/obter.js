
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto } = db.models

module.exports = async function (projetoId, usuarioId, empresaId) {

    // Obter projeto
    const projeto = await IdeProjeto.findOne({
        _id: projetoId,
        empresa: empresaId
    }).populate('cliente').populate('imagens')

    return projeto

}
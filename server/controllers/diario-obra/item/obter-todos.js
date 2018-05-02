const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioItem, DioRegistro } = db.models


module.exports = async function (auth, diarioId) {

    let itens = await DioItem.find({ diario: diarioId }).populate('imagens')
    
    return itens
}
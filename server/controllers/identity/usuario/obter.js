const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeUsuario } = db.models

module.exports = async function (usuarioId) {

    let usuario = await IdeUsuario.findById(usuarioId).populate('empresa')
    
    return usuario

}
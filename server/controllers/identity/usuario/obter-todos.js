const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeUsuario } = db.models

module.exports = async function (usuarioId) {

    let usuarios = await IdeUsuario.find().populate('empresa')
    
    return usuarios

}


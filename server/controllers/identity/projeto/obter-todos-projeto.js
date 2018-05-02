
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto, IdeUsuario } = db.models

module.exports = async function (projetoId) {

    // Obtem todos os usuários do projeto
    let projeto = await IdeProjeto
        .findById(projetoId)

    let usuarios = await IdeUsuario.find({ empresa: projeto.empresa })

    return usuarios

}
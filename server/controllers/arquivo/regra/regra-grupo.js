const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto, IdeUsuario, ArqGrupo } = db.models

module.exports = async function (projetoId, grupoId) {

    // Obtem regras do grupo
    let projeto = await IdeProjeto.findById(projetoId)

    let usuario = await IdeUsuario.find({ empresa: projeto.empresa })

    let usuarios = await usuario.map((u) => {
        return {
            exibicao: u.exibicao,
            email: u.email
        }
    })

    let grupo = await ArqGrupo.findById(grupoId).populate('regras')

    let regras = await grupo.regras.map((r) => {
        return {
            usuario: r.usuario,
            tipo: r.tipo
        }
    })

    return { regras, usuarios }

}
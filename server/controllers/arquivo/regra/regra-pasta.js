const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto, IdeUsuario, ArqPasta } = db.models

module.exports = async function (projetoId, pastaId) {

    // Obtem regras da pasta
    let projeto = await IdeProjeto.findById(projetoId)

    let usuarios = await IdeUsuario
        .find({ empresa: projeto.empresa })
        .select({
            exibicao: 1,
            email: 1
        })
        
    let pasta = await ArqPasta.findById(pastaId).populate('regras')

    let regras = await pasta.regras.map((r) => {
        return {
            usuario: r.usuario,
            tipo: r.tipo
        }
    })

    return { regras, usuarios }

}
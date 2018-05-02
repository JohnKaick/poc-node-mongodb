const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto, IdeUsuario } = db.models

module.exports = async function (projetoId, parametroId) {

    // Obtem parâmetro do projeto
    let projeto = await IdeProjeto.findById(projetoId)

    let parametro = null
    
    for (i in projeto.propriedades) {
        if (projeto.propriedades[i].id == parametroId) {
            parametro = projeto.propriedades[i]
            break
        }
    }

    return parametro

}
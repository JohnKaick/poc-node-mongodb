const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto, IdeUsuario } = db.models

module.exports = async function (auth, projetoId, parametroId, data) {

    // Obtem parâmetro do projeto
    let projeto = await IdeProjeto.findById(projetoId)

    let parametro = null
    for (i in projeto.propriedades) {
        if (projeto.propriedades[i].id === parametroId) {
            projeto.propriedades[i].nome = data.nome
            projeto.propriedades[i].valor = data.valor
            parametro = projeto.propriedades[i]
            break
        }
    }

    await projeto.save()

    return parametro

}
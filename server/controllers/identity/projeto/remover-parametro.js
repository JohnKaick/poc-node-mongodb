const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto, IdeUsuario } = db.models

module.exports = async function (projetoId, parametroId) {

    // Remove parâmetro do projeto
    let projeto = await IdeProjeto.findById(projetoId)

    for (i in projeto.propriedades) {
        if (projeto.propriedades[i].id === parametroId) {
            projeto.propriedades[i].remove()
            break
        }
    }

    await projeto.save()

    return { success: true }

}
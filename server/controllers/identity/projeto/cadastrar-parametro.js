
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto } = db.models

module.exports = async function (auth, projetoId, data) {

    // Verifica-se a projeto existe
    if (!projetoId) throw new eh.KnownError('notFound', 'projeto_notFound')

    // Cadastrar parâmetro do projeto
    const projeto = await IdeProjeto.findById(projetoId)

    projeto.propriedades.push({
        nome: data.nome,
        valor: data.valor
    })

    await projeto.save()

    return projeto
    
}
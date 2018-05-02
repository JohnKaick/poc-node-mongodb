const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto, ArqPasta } = db.models

module.exports = async function (auth, projetoId, data) {

    let projeto = await IdeProjeto.findById(projetoId)

    // Cadastrar pasta
    let pasta = await ArqPasta.create({
        empresa: projeto.empresa,
        projeto: projeto._id,
        disciplina: data.disciplina,
        nome: data.nome,
        regraPadrao: 'block',
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
    })

    em.emit('pasta-cadastrada', { pasta })

    return pasta

}


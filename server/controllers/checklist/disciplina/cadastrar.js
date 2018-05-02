const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkDisciplina } = db.models

module.exports = async function (auth, data) {

    // Cadastrar disciplina
    let disciplina = await ChkDisciplina.create({
        nome: data.nome,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId,
    })

    em.emit('disciplina-cadastrada', { disciplina })

    return disciplina

}


const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdPasta } = db.models

module.exports = async function (auth, disciplinaId, data) {

    // Cadastrar pasta
    let pasta = await ChkMdPasta.create({
        disciplina: disciplinaId,
        nome: data.nome,
        descritivo: data.descritivo,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId,
    })

    em.emit('mdPasta-cadastrada', { pasta })

    return pasta

}


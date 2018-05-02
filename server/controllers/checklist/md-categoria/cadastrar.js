const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdCategoria } = db.models

module.exports = async function (auth, disciplinaId, data) {

    // Cadastrar categoria
    let categoria = await ChkMdCategoria.create({
        disciplina: disciplinaId,
        nome: data.nome,
        descritivo: data.descritivo,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId
    })

    em.emit('mdCategoria-cadastrada', { categoria })

    return categoria

}


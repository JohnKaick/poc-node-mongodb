const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprRelatorio } = db.models

module.exports = async function (auth, projetoId, data) {

    // Cadastrar relatorio
    let relatorio = await AprRelatorio.create({
        empresa: auth.empresaId,
        projeto: projetoId,
        titulo: data.titulo,
        revisao: data.revisao,
        data: new Date(data.data),
        indice: 0,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date()
    })

    return relatorio

}
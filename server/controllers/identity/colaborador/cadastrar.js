const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeColaborador, IdeProjeto } = db.models

module.exports = async function (auth, data) {

    // Cadastrar colaborador
    let colaborador = await IdeColaborador.create({
        empresa: auth.empresaId,
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        cliente: data.cliente,
        area: data.area,
        cargo: data.cargo,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date(),
    })

    await colaborador.save()

    return colaborador

}
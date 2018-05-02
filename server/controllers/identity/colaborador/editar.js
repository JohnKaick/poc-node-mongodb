const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeColaborador, IdeProjeto } = db.models

module.exports = async function (auth, colaboradorId, data) {

    // Editar colaborador
    let colaborador = await IdeColaborador.findByIdAndUpdate(colaboradorId, {
        $set: {
            nome: data.nome,
            sobrenome: data.sobrenome,
            email: data.email,
            cliente: data.cliente,
            area: data.area,
            cargo: data.cargo,
            editadoPor: auth.usuarioId,
            editadoEm: new Date()
        }
    }, { new: true })

    return colaborador

}
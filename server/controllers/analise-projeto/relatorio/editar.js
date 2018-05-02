const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprRelatorio } = db.models

module.exports = async function (auth, relatorioId, data) {

    // Editar relatorio
    let relatorio = await AprRelatorio.findByIdAndUpdate(relatorioId, {
        $set: {
            titulo: data.titulo,
            revisao: data.revisao,
            data: new Date(data.data),
            indice: 0,
            editadoPor: auth.usuarioId,
            editadoEm: new Date()
        }
    }, { new: true })

    return relatorio

}
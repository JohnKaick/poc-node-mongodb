const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { DioRegistro } = db.models

module.exports = async function (auth, diarioId, data) {

    // Editar diario-obra
    let diario = await DioRegistro.findByIdAndUpdate(diarioId, {
        $set: {
            descricao: data.descricao,
            local: data.local,
            responsavel: data.responsavel,
            dataHora: data.dataHora,
            tempoManha: data.tempoManha,
            tempoTarde: data.tempoTarde,
            tempoNoite: data.tempoNoite,
            editadoPor: auth.usuarioId,
            editadoEm: new Date(),
        }
    }, { new: true })

    return diario

}
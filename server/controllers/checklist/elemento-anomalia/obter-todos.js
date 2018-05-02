const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElementiAnomalia } = db.models

module.exports = async function (modeloId) {

    // Obter todos os elemento-anomalia
    let anomalias = await ChkElementiAnomalia.find({ modelo: modeloId }).populate('projeto checklist grupo elemento modelo imagens')

    em.emit('elemento-anomalia-obterTodos', { anomalias })

    return anomalias

}


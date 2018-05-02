const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkElementiAnomalia } = db.models

module.exports = async function (elementoAnomaliaId) {

    // Obter elemento-anomalia
    let anomalia = await ChkElementiAnomalia.findById(elementoAnomaliaId).populate('projeto checklist grupo elemento modelo imagens')

    em.emit('elemento-anomalia-obter', { anomalia })

    return anomalia

}


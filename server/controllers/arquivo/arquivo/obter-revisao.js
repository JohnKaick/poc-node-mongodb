const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqRevisao } = db.models

module.exports = async function (revisaoId) {

    // Obter arquivo e revisao
    let revisao = await ArqRevisao.findById(revisaoId).populate('arquivo')

    em.emit('revisao-obtida', revisao)

    return revisao

}
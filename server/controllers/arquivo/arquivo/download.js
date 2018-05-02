const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqRevisao } = db.models

const baseDownload = require('./base-download')

module.exports = async function (auth, revisaoId, tipo) {

    // Verifica se o arquivo existe.
    let revisao = await ArqRevisao.findById(revisaoId)

    if (!revisao) throw new eh.KnownError('notFound', 'revisao_notFound')

    return baseDownload(revisao, tipo)

}
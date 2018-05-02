
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeEmpresa } = db.models

module.exports = async function (empresaId) {

    // Verifica-se recebeu o id
    if (!empresaId) throw new eh.KnownError('unauthorized', 'empresa_invalid')

    // Obter empresa 
    return await IdeEmpresa.findById(empresaId).populate('endereco')

}
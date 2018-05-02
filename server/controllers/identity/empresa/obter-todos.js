
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeUsuario } = db.models

module.exports = async function (empresaId) {

    try {

        // Obter empresa e usuários participantes
        const empresa = await IdeUsuario.find({ empresa: empresaId }).select('exibicao email').populate('empresa')

        return empresa

    } catch (err) {
        console.log(err)
    }

}
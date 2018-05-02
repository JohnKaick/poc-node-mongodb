

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeEmpresa, IdeUsuario } = db.models

module.exports = async function (empresaId, email) {

    try {

        // Verifica-se o e-mail existe
        const usuario = await IdeUsuario.findOne({ email: email })

        // Desvincular usuario na empresa
        await IdeEmpresa.findByIdAndRemove(empresaId, { $set: { usuarios: usuario } })

        return { success: true }

    } catch (err) {
        console.log(err)
    }

}
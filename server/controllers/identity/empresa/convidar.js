

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeEmpresa, IdeUsuario } = db.models

module.exports = async function (empresaId, email) {

    try {

        // Verifica-se o e-mail existe
        let usuario = await IdeUsuario.findOne({ email: email })
        if (!usuario) throw new eh.KnownError('notFound', 'user_notFound')


        // Vincular usuario na empresa
        await IdeEmpresa.findByIdAndUpdate(empresaId, { $set: { usuarios: usuario } })

        return { success: true }

    } catch (err) {
        console.log(err)
    }

}
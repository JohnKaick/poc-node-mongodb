const eh = require('common/error-handler')
const { IdeUsuario } = require('database').models

module.exports = async function (empresaId) {

    // usuários que fazem parte da mesma empresa
    let usuarios = await IdeUsuario.find({ 'empresa': empresaId })

    return usuarios

}


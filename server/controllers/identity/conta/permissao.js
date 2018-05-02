const db = require('database')
const { IdePermissao } = db.models

module.exports = async function (usuarioId) {
    // Obter permissão de usuário
    const permissoes = await IdePermissao.find({ usuario: usuarioId })
    return []
}
const jwt = require('jsonwebtoken')
const superKey = '3e7e7848d66247328e3a7fbf363b08ca'

module.exports = async function (imagem, diario, usuarioId) {
    return jwt.sign({
        arquivoToken: imagem.arquivoToken,
        permissao: '',
        usuario: usuarioId,
        projetoId: diario.projeto,
        nomenclatura: imagem.arquivoToken,
        tipo: 'diario-obra-item'
    }, superKey)
}
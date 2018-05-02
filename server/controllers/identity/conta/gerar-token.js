const jwt = require('jsonwebtoken')

module.exports = async function (conta, usuario, regra) {

    let tokenData = {
        contaId: conta.id,
        usuarioId: usuario.id,
        empresaId: usuario.empresa ? usuario.empresa.toString() : null,
        scope: regra
    }

    let config = {
        expiresIn: '7 days'
    }

    let token = jwt.sign(tokenData, process.env.JWT_SECRET, config)

    return {
        token: token,
        usuario: {
            id: usuario._id,
            empresa: usuario.empresa,
            nome: usuario.nome,
            email: usuario.email,
            exibicao: usuario.exibicao,
            avatar: usuario.avatar
        },
        permissoes: regra
    }

}
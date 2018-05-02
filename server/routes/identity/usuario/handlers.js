const eh = require('common/error-handler')

const {
    obterTodos, obterPorEmpresa, obter,
    editarPerfil, fotoPerfil
} = require('controllers/identity/usuario')

// obter todos os usuários do sistema
module.exports.obterTodos = async function (request, reply) {
    try {
        const result = await obterTodos()
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

// obter todos os usuarios por empresa
module.exports.obterPorEmpresa = async function (request, reply) {
    try {
        const result = await obterPorEmpresa(request.params.empresaId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

// obter todos os usuarios da empresa do usuario logado
module.exports.obterEmpresaAtual = async function (request, reply) {
    try {
        const result = await obterPorEmpresa(request.auth.credentials.empresaId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

// obter dados do perfil do usuario logado
module.exports.obter = async function (request, reply) {
    try {
        const result = await obter(request.auth.credentials.usuarioId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

// editar perfil do usuario logado
module.exports.editarPerfil = async function (request, reply) {
    try {
        const result = await editarPerfil(request.auth.credentials.usuarioId, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

// carregar avatar do usuario logado
module.exports.fotoPerfil = async function (request, reply) {
    try {
        const result = await fotoPerfil(request.auth.credentials.usuarioId, request.payload)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
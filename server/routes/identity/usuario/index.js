const {
    obterTodos,
    obterPorEmpresa,
    obterEmpresaAtual,
    obter,
    editarPerfil,
    fotoPerfil
} = require('./handlers')

module.exports = [
    {
        path: '/identity/usuario/obter-todos',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/identity/usuario/obter-multiplos/{empresaId}',
        method: 'GET',
        config: {
            handler: obterPorEmpresa
        }
    },
    {
        path: '/identity/usuario/empresa-atual',
        method: 'GET',
        config: {
            handler: obterEmpresaAtual
        }
    },
    {
        path: '/identity/perfil',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/identity/perfil',
        method: 'POST',
        config: {
            handler: editarPerfil
        }
    },
    {
        path: '/identity/perfil/avatar',
        method: 'POST',
        config: {
            handler: fotoPerfil,
            payload: {
                timeout: false,
                maxBytes: 2097150200,
                output: 'file'
            },
            timeout: {
                server: false,
                socket: false
            }
        }
    }
]
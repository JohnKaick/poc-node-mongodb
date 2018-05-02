const {
    obter, obterAtual, obterAdmin, obterTodos,
    cadastrar, editar, convidar,
    desconvidar
} = require('./handlers')

module.exports = [
    {
        path: '/identity/empresa/obter-todos',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/identity/empresa/atual',
        method: 'GET',
        config: {
            handler: obterAtual
        }
    },
    {
        path: '/identity/empresa/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/identity/empresa/obter-admin',
        method: 'GET',
        config: {
            handler: obterAdmin
        }
    },
    {
        path: '/identity/empresa/cadastrar',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/identity/empresa/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/identity/empresa/convidar',
        method: 'POST',
        config: {
            handler: convidar
        }
    },
    {
        path: '/identity/empresa/desconvidar',
        method: 'POST',
        config: {
            handler: desconvidar
        }
    }
]
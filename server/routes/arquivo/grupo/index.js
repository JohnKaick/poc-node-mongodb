const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/arquivo/grupo/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/arquivo/grupo/obter-todos/{pastaId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/arquivo/grupo/cadastrar/{pastaId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/arquivo/grupo/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/arquivo/grupo/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
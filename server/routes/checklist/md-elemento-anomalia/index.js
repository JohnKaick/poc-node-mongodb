const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/md-elemento-anomalia/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/md-elemento-anomalia/obter-todos/{mdElementoId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/md-elemento-anomalia/cadastrar/{mdElementoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/md-elemento-anomalia/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/md-elemento-anomalia/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
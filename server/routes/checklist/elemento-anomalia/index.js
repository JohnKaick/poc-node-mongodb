const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/elemento-anomalia/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/elemento-anomalia/obter-todos/{mdElementoAnomaliaId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/elemento-anomalia/cadastrar/{mdElementoAnomaliaId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/elemento-anomalia/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/elemento-anomalia/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/md-grupo-anomalia/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/md-grupo-anomalia/obter-todos/{mdPastaId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/md-grupo-anomalia/cadastrar/{mdPastaId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/md-grupo-anomalia/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/md-grupo-anomalia/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
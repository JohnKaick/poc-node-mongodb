const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/checklist/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/checklist/obter-todos/{projetoId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/checklist/cadastrar/{projetoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/checklist/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/checklist/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
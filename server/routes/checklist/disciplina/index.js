const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/disciplina/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/disciplina/obter-todos',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/disciplina/cadastrar',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/disciplina/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/disciplina/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]

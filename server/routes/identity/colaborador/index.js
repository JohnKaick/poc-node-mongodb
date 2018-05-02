const {
    obter,
    obterTodos,
    cadastrar,
    editar,
} = require('./handlers')

module.exports = [
    {
        path: '/identity/colaborador/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/identity/colaborador',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/identity/colaborador/cadastrar',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/identity/colaborador/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
]
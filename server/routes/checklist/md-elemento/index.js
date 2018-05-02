const {
    obter,
    obterTodos,
    obterPorPasta,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/md-elemento/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/md-elemento/obter-todos',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/md-elemento/obter-pasta/{pastaId}',
        method: 'GET',
        config: {
            handler: obterPorPasta
        }
    },
    {
        path: '/checklist/md-elemento/cadastrar',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/md-elemento/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/md-elemento/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
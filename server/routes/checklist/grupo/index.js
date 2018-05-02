const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    verificar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/grupo/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/grupo/obter-todos/{projetoId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/grupo/cadastrar/{projetoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/grupo/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/grupo/verificar/{checklistId}',
        method: 'POST',
        config: {
            handler: verificar
        }
    },
    {
        path: '/checklist/grupo/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
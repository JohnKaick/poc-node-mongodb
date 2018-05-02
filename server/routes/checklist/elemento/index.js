const {
    obter,
    obterTodosChecklist,
    obterTodos,
    cadastrar,
    editar,
    verificar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/elemento/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/elemento/obter-todos-checklist/{checklistId}',
        method: 'GET',
        config: {
            handler: obterTodosChecklist
        }
    },
    {
        path: '/checklist/elemento/obter-todos/{grupoId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/elemento/cadastrar/{mdElementoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/elemento/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/elemento/verificar/{checklistId}',
        method: 'POST',
        config: {
            handler: verificar
        }
    },
    {
        path: '/checklist/elemento/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
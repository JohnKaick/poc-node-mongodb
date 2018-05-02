const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/imagem/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/imagem/obter-todos/{projetoId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/imagem/cadastrar/{projetoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/imagem/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/imagem/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
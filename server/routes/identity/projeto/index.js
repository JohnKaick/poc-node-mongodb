const {
    obter,
    obterTodos,
    obterTodosPorProjeto,
    obterParametro,
    cadastrar,
    editar,
    cadastrarParametro,
    editarParametro,
    inserirImagem,
    removerImagem,
    removerParametro,
} = require('./handlers')

module.exports = [
    {
        path: '/identity/projeto/obter-todos',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/identity/projeto/obter-todos-projeto/{projetoId}',
        method: 'GET',
        config: {
            handler: obterTodosPorProjeto
        }
    },
    {
        path: '/identity/projeto/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/identity/projeto/obter-parametro/{projetoId}/{id}',
        method: 'GET',
        config: {
            handler: obterParametro
        }
    },
    {
        path: '/identity/projeto/cadastrar',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/identity/projeto/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/identity/projeto/cadastrar-parametro/{projetoId}',
        method: 'POST',
        config: {
            handler: cadastrarParametro
        }
    },
    {
        path: '/identity/projeto/editar-parametro/{projetoId}/{id}',
        method: 'POST',
        config: {
            handler: editarParametro
        }
    },
    {
        path: '/identity/projeto/inserir-imagem/{id}',
        method: 'POST',
        config: {
            handler: inserirImagem,
            payload: {
                maxBytes: 2097150200,
                output: 'file'
            },
        }
    },
    {
        path: '/identity/projeto/remover-imagem/{id}',
        method: 'POST',
        config: {
            handler: removerImagem,
        }
    },
    {
        path: '/identity/projeto/remover-parametro/{projetoId}/{id}',
        method: 'DELETE',
        config: {
            handler: removerParametro
        }
    },
]
const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover,
    // Imagens
    obterImagem,
    inserirImagem,
    removerImagem
} = require('./handlers')

module.exports = [
    {
        path: '/diario-obra/item/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/diario-obra/item/obter-todos/{diarioId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/diario-obra/item/cadastrar/{diarioId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/diario-obra/item/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/diario-obra/item/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
    // imagens
    {
        path: '/diario-obra/imagem/obter-imagem/{id}',
        method: 'GET',
        config: {
            handler: obterImagem
        }
    },
    {
        path: '/diario-obra/item/inserir-imagem/{id}',
        method: 'POST',
        config: {
            payload: {
                maxBytes: 2097150200,
                output: 'file'
            },
            handler: inserirImagem
        }
    },
    {
        path: '/diario-obra/item/remover-imagem/{id}',
        method: 'POST',
        config: {
            handler: removerImagem
        }
    }
]
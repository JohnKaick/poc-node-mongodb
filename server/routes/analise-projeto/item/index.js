const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover,
    alterarPosicao
} = require('./handlers')

module.exports = [
    {
        path: '/analise-projeto/item/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/analise-projeto/item/obter-todos/{relatorioId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/analise-projeto/item/cadastrar/{relatorioId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/analise-projeto/item/editar/{id}',
        method: 'POST',
        config: {
            handler: editar,
        }
    },
    {
        path: '/analise-projeto/item/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover,
        }
    },
    {
        path: '/analise-projeto/item/alterar-posicao/{itemA}/{itemB}',
        method: 'POST',
        config: {
            handler: alterarPosicao,
        }
    },
]
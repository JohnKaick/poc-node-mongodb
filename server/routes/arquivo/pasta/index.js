const {
    obter,
    obterPorProjeto,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/arquivo/pasta/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/arquivo/pasta/obter-projeto/{projetoId}',
        method: 'GET',
        config: {
            handler: obterPorProjeto
        }
    },
    {
        path: '/arquivo/pasta/cadastrar/{projetoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/arquivo/pasta/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/arquivo/pasta/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
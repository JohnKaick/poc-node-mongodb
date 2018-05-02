const {
    obter,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/analise-projeto/arquivo-analisado/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/analise-projeto/arquivo-analisado/cadastrar/{relatorioId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/analise-projeto/arquivo-analisado/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/analise-projeto/arquivo-analisado/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover,
        }
    },
]
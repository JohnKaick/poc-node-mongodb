const {
    cadastrar,
    cadastrarPublico,
    aprovar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/analise-projeto/replica/cadastrar/{itemId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/analise-projeto/replica/publico/{token}',
        method: 'PUT',
        config: {
            auth: false,
            handler: cadastrarPublico,
        }
    },
    {
        path: '/analise-projeto/replica/aprovar/{itemId}/{id}',
        method: 'POST',
        config: {
            handler: aprovar
        }
    },
    {
        path: '/analise-projeto/replica/remover/{itemId}/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
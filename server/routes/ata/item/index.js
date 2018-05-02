const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/ata/item/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/ata/item/obter-todos/{ataId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/ata/item/cadastrar/{ataId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/ata/item/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/ata/item/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
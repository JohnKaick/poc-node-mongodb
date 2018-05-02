const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    migrar,
    transmitir,
    remover
} = require('./handlers')

module.exports = [
    {
        path: '/ata/registro/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/ata/registro/obter-todos/{projetoId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/ata/registro/cadastrar/{projetoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/ata/registro/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/ata/registro/migrar/{id}',
        method: 'POST',
        config: {
            handler: migrar
        }
    },
    {
        path: '/ata/registro/transmitir/{id}',
        method: 'POST',
        config: {
            handler: transmitir
        }
    },
    {
        path: '/ata/registro/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
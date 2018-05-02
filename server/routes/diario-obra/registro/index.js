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
        path: '/diario-obra/registro/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/diario-obra/registro/obter-todos/{projetoId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/diario-obra/registro/cadastrar/{projetoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/diario-obra/registro/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/diario-obra/registro/migrar/{id}',
        method: 'POST',
        config: {
            handler: migrar
        }
    },
    {
        path: '/diario-obra/registro/transmitir/{id}',
        method: 'POST',
        config: {
            handler: transmitir
        }
    },
    {
        path: '/diario-obra/registro/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
]
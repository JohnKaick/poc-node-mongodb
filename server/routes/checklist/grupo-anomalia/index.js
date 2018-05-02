const {
    obter,
    obterTodos,
    cadastrar,
    editar,
    remover,
    imagem
} = require('./handlers')

module.exports = [
    {
        path: '/checklist/grupo-anomalia/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/checklist/grupo-anomalia/obter-todos/{mdGrupoAnomaliaId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/checklist/grupo-anomalia/cadastrar/{mdGrupoAnomaliaId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/checklist/grupo-anomalia/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/checklist/grupo-anomalia/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
    {
        path: '/checklist/grupo-anomalia/imagem/{id}',
        method: 'POST',
        config: {
            handler: imagem
        }
    },
]
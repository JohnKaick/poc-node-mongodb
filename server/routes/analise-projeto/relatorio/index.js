const {
    obter,
    obterTodos,
    obterPublico,
    cadastrar,
    editar,
    migrar,
    emitir,
    transmitir,
    remover,
    vincularColaborador,
    removerColaborador
} = require('./handlers')

module.exports = [
    {
        path: '/analise-projeto/relatorio/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/analise-projeto/relatorio/obter-todos/{projetoId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/analise-projeto/relatorio/publico/{token}',
        method: 'GET',
        config: {
            auth: false,
            handler: obterPublico,
        }
    },
    {
        path: '/analise-projeto/relatorio/cadastrar/{projetoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/analise-projeto/relatorio/editar/{id}',
        method: 'POST',
        config: {
            handler: editar
        }
    },
    {
        path: '/analise-projeto/relatorio/migrar/{id}',
        method: 'POST',
        config: {
            handler: migrar
        }
    },
    {
        path: '/analise-projeto/relatorio/transmitir/{id}',
        method: 'POST',
        config: {
            handler: transmitir
        }
    },
    {
        path: '/analise-projeto/relatorio/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
    {
        path: '/analise-projeto/relatorio/vincular-colaborador/{id}/{colaboradorId}',
        method: 'POST',
        config: {
            handler: vincularColaborador
        }
    },
    {
        path: '/analise-projeto/relatorio/remover-colaborador/{id}/{colaboradorId}',
        method: 'POST',
        config: {
            handler: removerColaborador
        }
    },
]
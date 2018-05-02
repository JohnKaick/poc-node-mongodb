const {
    obter,
    obterRevisao,
    obterTodos,
    cadastrar,
    cadastrarRevisao,
    editar,
    editarRevisao,
    remover,
    removerRevisao,
    download,
    downloadMultiplos,
    upload
} = require('./handlers')

module.exports = [
    {
        path: '/arquivo/arquivo/obter/{id}',
        method: 'GET',
        config: {
            handler: obter
        }
    },
    {
        path: '/arquivo/arquivo/obter-revisao/{revisaoId}',
        method: 'GET',
        config: {
            handler: obterRevisao
        }
    },
    {
        path: '/arquivo/arquivo/obter-todos/{grupoId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/arquivo/arquivo/cadastrar/{grupoId}',
        method: 'PUT',
        config: {
            handler: cadastrar
        }
    },
    {
        path: '/arquivo/arquivo/cadastrar-revisao/{revisaoId}',
        method: 'PUT',
        config: {
            handler: cadastrarRevisao
        }
    },
    {
        path: '/arquivo/arquivo/editar-revisao/{revisaoId}',
        method: 'POST',
        config: {
            handler: editarRevisao
        }
    },
    {
        path: '/arquivo/arquivo/remover/{id}',
        method: 'DELETE',
        config: {
            handler: remover
        }
    },
    {
        path: '/arquivo/arquivo/remover-revisao/{id}',
        method: 'DELETE',
        config: {
            handler: removerRevisao
        }
    },
    {
        path: '/arquivo/arquivo/download/{revisaoId}/{tipo?}',
        method: 'GET',
        config: {
            handler: download
        }
    },
    {
        path: '/arquivo/arquivo/download-multiplos/{grupoId}/{tipos?}',
        method: 'GET',
        config: {
            handler: downloadMultiplos
        }
    },
    {
        path: '/arquivo/arquivo/upload/{revisaoId}',
        method: 'POST',
        config: {
            payload: {
                timeout: false,
                maxBytes: 2097150200,
                output: 'file'
            },
            timeout: {
                server: false,
                socket: false
            },
            handler: upload
        }
    },
]
const {
    obterTodos,
    vincular,
    desvincular
} = require('./handlers')

module.exports = [
    {
        path: '/analise-projeto/participante/obter-todos/{relatorioId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/analise-projeto/participante/vincular/{relatorioId}/{participanteId}',
        method: 'POST',
        config: {
            handler: vincular
        }
    },
    {
        path: '/analise-projeto/participante/desvincular/{relatorioId}/{participanteId}',
        method: 'POST',
        config: {
            handler: desvincular
        }
    },
]
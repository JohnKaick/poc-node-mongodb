const {
    obterTodos,
    vincular,
    desvincular
} = require('./handlers')

module.exports = [
    {
        path: '/diario-obra/participante/obter-todos/{diarioId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/diario-obra/participante/vincular/{diarioId}/{participanteId}',
        method: 'POST',
        config: {
            handler: vincular
        }
    },
    {
        path: '/diario-obra/participante/desvincular/{diarioId}/{participanteId}',
        method: 'POST',
        config: {
            handler: desvincular
        }
    }
]
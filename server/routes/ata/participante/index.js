const {
    obterTodos,
    vincular,
    desvincular
} = require('./handlers')

module.exports = [
    {
        path: '/ata/participante/obter-todos/{ataId}',
        method: 'GET',
        config: {
            handler: obterTodos
        }
    },
    {
        path: '/ata/participante/vincular/{ataId}/{participanteId}',
        method: 'POST',
        config: {
            handler: vincular
        }
    },
    {
        path: '/ata/participante/desvincular/{ataId}/{participanteId}',
        method: 'POST',
        config: {
            handler: desvincular
        }
    }
]
const {
    regraPasta,
    regraGrupo,
    atribuirPasta,
    atribuirGrupo
} = require('./handlers')

module.exports = [
    {
        path: '/arquivo/regra-pasta/{projetoId}/{pastaId}',
        method: 'GET',
        config: {
            handler: regraPasta
        }
    },
    {
        path: '/arquivo/regra-grupo/{projetoId}/{grupoId}',
        method: 'GET',
        config: {
            handler: regraGrupo
        }
    },
    {
        path: '/arquivo/regra/atribuir-pasta',
        method: 'POST',
        config: {
            handler: atribuirPasta
        }
    },
    {
        path: '/arquivo/regra/atribuir-grupo',
        method: 'POST',
        config: {
            handler: atribuirGrupo
        }
    },
]
module.exports = function (server) {
    server.route({
        method: 'GET',
        path: '/',
        config: {
            auth: false,
            handler: function (request, reply) {
                reply({
                    'server-status': 'online',
                    'server-time': Date.now()
                })
            },
            cache: {
                expiresIn: 10,
                privacy: 'private'
            }
        }
    })
    server.route(require('./../routes/identity/conta'))
    server.route(require('./../routes/identity/usuario'))
    server.route(require('./../routes/identity/empresa'))
    server.route(require('./../routes/identity/projeto'))
    server.route(require('./../routes/identity/colaborador'))
    server.route(require('./../routes/arquivo/pasta'))
    server.route(require('./../routes/arquivo/grupo'))
    server.route(require('./../routes/arquivo/arquivo'))
    server.route(require('./../routes/checklist/disciplina'))
    server.route(require('./../routes/checklist/md-pasta'))
    server.route(require('./../routes/checklist/md-categoria'))
    server.route(require('./../routes/checklist/md-elemento'))
    server.route(require('./../routes/checklist/md-elemento-anomalia'))
    server.route(require('./../routes/checklist/md-grupo-anomalia'))
    server.route(require('./../routes/checklist/checklist'))
    server.route(require('./../routes/checklist/grupo'))
    server.route(require('./../routes/checklist/elemento'))
    server.route(require('./../routes/checklist/grupo-anomalia'))
    server.route(require('./../routes/checklist/elemento-anomalia'))
    server.route(require('./../routes/analise-projeto/relatorio'))
    server.route(require('./../routes/analise-projeto/item'))
    server.route(require('./../routes/analise-projeto/replica'))
    server.route(require('./../routes/analise-projeto/arquivo-analisado'))
    server.route(require('./../routes/analise-projeto/participante'))
    server.route(require('./../routes/ata/registro'))
    server.route(require('./../routes/ata/item'))
    server.route(require('./../routes/ata/participante'))
    server.route(require('./../routes/diario-obra/registro'))
    server.route(require('./../routes/diario-obra/item'))
    server.route(require('./../routes/diario-obra/participante'))
}
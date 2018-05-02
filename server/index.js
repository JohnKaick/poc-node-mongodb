require('app-module-path').addPath(__dirname)

let opts = {}
opts.origin = opts.origin || ["*"]
opts.headers = opts.headers || ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"]
opts.additionalHeaders = opts.additionalHeaders || ['Access-Control-Allow-Origin']

const hapi = require('hapi')

const server = new hapi.Server({
    connections: {
        routes: {
            cors: {
                origin: opts.origin,
                headers: opts.headers,
                additionalHeaders: opts.additionalHeaders
            }
        }
    }
})

server.connection({ port: process.env.PORT || 3000 })

server.register(require('./structure/server.plugins'), err => {
    if (err) console.log(err)

    require('./structure/server.auth')(server)
    /*
    server.ext({
        type: 'onRequest',
        method: function (request, reply) {
            request.auth.credentials = {
                usuarioId: "599d91bd1a70d526dc6eb543"
            }
            reply.continue()
        }
    })
    */
    require('./structure/server.routes')(server)

})

module.exports = server
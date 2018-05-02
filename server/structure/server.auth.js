// node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"

const validate = (decoded, request, callback) => {
    if (decoded && decoded.usuarioId) {
        callback(null, true)
    } else {
        callback(null, false)
    }
}

module.exports = function (server) {

    server.auth.strategy('jwt', 'jwt', {
        key: process.env.JWT_SECRET,
        validateFunc: validate,
        verifyOptions: { algorithms: ['HS256'] }
    })

    server.auth.default('jwt')

}
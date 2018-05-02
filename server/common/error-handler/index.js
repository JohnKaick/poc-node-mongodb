module.exports.resolve = function (request, reply, err) {
    console.error(err)
    if (err.type) {
        reply[err.type](err.exception)
    } else {
        reply.badImplementation(err)
    }
}

module.exports.KnownError = function (type, err) {
    this.type = type
    this.exception = err
}
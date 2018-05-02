const eh = require('common/error-handler')

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
} = require('controllers/arquivo/arquivo')

module.exports.obter = async function (request, reply) {
    try {
        const result = await obter(request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

module.exports.obterRevisao = async function (request, reply) {
    try {
        const result = await obterRevisao(request.params.revisaoId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.obterTodos = async function (request, reply) {
    try {
        const result = await obterTodos(request.params.grupoId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrar = async function (request, reply) {
    try {
        const result = await cadastrar(
            request.auth.credentials,
            request.params.grupoId,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.cadastrarRevisao = async function (request, reply) {
    try {
        const result = await cadastrarRevisao(
            request.auth.credentials,
            request.params.revisaoId,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.editar = async function (request, reply) {
    try {
        const result = await editar(
            request.auth.credentials,
            request.params.revisaoId,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.editarRevisao = async function (request, reply) {
    try {
        const result = await editarRevisao(
            request.auth.credentials,
            request.params.revisaoId,
            request.payload
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.remover = async function (request, reply) {
    try {
        const result = await remover(request.params.id)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
module.exports.removerRevisao = async function (request, reply) {
    try {
        const result = await removerRevisao(request.params.revisaoId)
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}



module.exports.download = async function (request, reply) {
    try {
        const result = await download(
            request.auth.credentials,
            request.params.revisaoId,
            request.params.tipo,
            request
        )
        reply(result.stream)
            .header('Access-Control-Expose-Headers', 'content-disposition,file-name')
            .header('content-disposition', 'attachment; filename="' + result.filename + '"')
            .header('file-name', result.filename)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}

module.exports.downloadMultiplos = async function (request, reply) {
    try {
        const result = await downloadMultiplos(
            request.auth.credentials,
            request.params.grupoId,
            request.params.tipos,
            request
        )
        reply(result)
            .header('Access-Control-Expose-Headers', 'content-disposition,file-name')
            .header('content-disposition', 'attachment; filename=compactado.zip')
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}


module.exports.upload = async function (request, reply) {
    try {
        const result = await upload(
            request.auth.credentials,
            request.params.revisaoId,
            request
        )
        reply(result)
    } catch (err) {
        eh.resolve(request, reply, err)
    }
}
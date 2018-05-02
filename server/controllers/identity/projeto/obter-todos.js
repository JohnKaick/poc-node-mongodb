const _ = require('lodash')
const eh = require('common/error-handler')
const db = require('database')
const { IdeProjeto, IdePermissao, IdeEmpresa } = db.models

module.exports = async function (usuarioId, empresaId) {

    let params = []

    let empresa = null

    if (empresaId) {
        empresa = await IdeEmpresa.findById(empresaId)
    }

    let atribuidos = await IdePermissao.find({
        usuario: usuarioId,
        empresa: { $ne: empresaId },
        escopo: 'p'
    })

    if (empresa) {
        let defaultRole = _.find(empresa.vars, { key: 'default-project-access' })
        if (defaultRole && defaultRole.value !== 'b') {
            params.push({ empresa: empresa._id })
        }
    }

    params.push({ _id: { $in: atribuidos.map(p => p.projeto) } })

    if (empresaId) {
        return await IdeProjeto
            .find({ $or: params })
            .populate('cliente')
            .populate('imagens')
    } else {
        return []
    }

}
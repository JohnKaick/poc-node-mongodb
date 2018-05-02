const _ = require('lodash')
const eh = require('common/error-handler')
const { IdeEmpresa, IdeUsuario, IdePermissao } = require('database').models

module.exports = async function (usuarioId, empresaId) {

    // retornar tudo que a tela de admin precisa...
    // dados da empresa, usuarios da empresa, usuarios participantes, permissoes.

    const [empresa, usuarios, permissoes] = await Promise.all([
        // obtem a empresa para verificar as variáveis
        IdeEmpresa.findById(empresaId),
        // obtem os usuários que fazem parte da empresa
        IdeUsuario.find({ empresa: empresaId }).populate('permissoes').sort({ exibicao: 1 }),
        // obter todas as regras atribuidas
        IdePermissao.find({ empresa: empresaId, escopo: 'e' })
    ])

    // O usuário atual, pode alterar ou visualizar estar permissões?
    // if (!empresaId) throw new eh.KnownError('unauthorized', 'empresa_invalid')

    // define uma regra padrão para os participantes da empresa (rwa = read-write-admin)
    // let regraPadrao = _.find(empresa.vars || [], { key: 'permissao-padrao-empresa' }) || 'rwa'
    let regrasPadroes = null

    let result = {}

    result.empresa = empresa

    result.usuarios = usuarios.map(usuario => {
        let data = usuario.toObject()
        let params = Object.assign({}, data, {
            permissoes: _.filter(permissoes, { usuario: usuario._id })
        })
        return params
    })

    return result

}
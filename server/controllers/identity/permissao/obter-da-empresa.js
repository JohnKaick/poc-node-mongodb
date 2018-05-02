const _ = require('lodash')
const eh = require('common/error-handler')
const { IdeEmpresa, IdeUsuario, IdePermissao } = require('database').models

export default async function (empresaId) {

    // obtem a empresa para verificar as variáveis
    let empresa = await IdeEmpresa.findById(empresaId)

    // define uma regra padrão para os participantes da empresa
    let regraPadrao = _.find(empresa.vars || [], { key: 'permissao-padrao-empresa' }) || 'rwa' // read-write

    // obter todas as regras atribuidas
    let permissoes = await IdePermissao.find({ empresa: empresa._id, escopo: 'e' })

    // obtem os usuários que fazem parte da empresa
    let usuarios = await IdeUsuario.find({ empresa: empresa._id })

    // verifica permissões atribuidas ou regra padrão
    let result = _.reduce(usuarios, (obj, u) => {
        let role = _.find(permissoes, { usuario: usuario.id })
        return obj[u.id] = role || regraPadrao
    }, {})

    // verificar usuários não participantes da empresa...

    // retorna o resultado
    return result

}
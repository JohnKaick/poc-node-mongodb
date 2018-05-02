const eh = require('common/error-handler')
const db = require('database')
const { IdeProjeto, IdePermissao, IdeUsuario } = db.models

module.exports.projeto = async function (request, h) {

    const usuarioId = request.auth.credentials.usuarioId
    const projetoId = request.params.id

    /*
    * Verifica-se o usuário e adm da empresa,
    * Se sim retorna todos os modulos do projeto
    */
    let usuario = await IdeUsuario.findById(usuarioId).populate('empresa')
    let projeto = await IdeProjeto.findById(projetoId).populate('empresa')
    if (usuario.empresa.id === projeto.empresa.id) return '*'


    let permissao = await IdePermissao.find({
        usuario: usuarioId,
        projeto: projetoId,
        escopo: 'p',
    })

    if (!permissao) return false

    permissao.acessos.map(a => {
        return {
            acessos: a
        }
    })



}
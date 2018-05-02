const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeUsuario } = db.models

module.exports = async function (usuarioId, data) {

    //Editar usuário
    let usuario = await IdeUsuario.findByIdAndUpdate(usuarioId, {
        $set: {
            nome: data.nome,
            sobrenome: data.sobrenome,
            exibicao: data.exibicao,
            telefone: data.telefone,
            celular: data.celular,
        }
    }, { new: true }, function (err, res) {
        if (err) throw new eh.KnownError('notFound', 'usuario_notSaved')
        em.emit('usuario-editado', { res })
    })

    return usuario

}


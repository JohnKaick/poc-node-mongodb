const uuid = require('uuid')
const eh = require('common/error-handler')
const { uploadBlob } = require('common/aws')
const { IdeUsuario } = require('database').models

module.exports = async function (usuarioId, file) {

    let token = uuid()

    let key = 'wisein/usuarios/' + usuarioId + '/avatars/' + token + '.jpg'

    let usuario = await IdeUsuario.findById(usuarioId)

    if (!usuario) throw new eh.KnownError('notFound', 'Usuário inexistente.')

    let blob = await uploadBlob(key, file, { ACL: 'public-read' })

    usuario.avatar = blob.Location

    await usuario.save()

    return { success: true, location: blob.Location }

}
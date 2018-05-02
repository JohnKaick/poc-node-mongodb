const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeEmpresa, IdeUsuario, IdeConta } = db.models
const gerarToken = require('./../conta/gerar-token')
const permissao = require('./../conta/permissao')

module.exports = async function (usuarioId, data) {

    try {

        // Verifica-se possui dominio
        //let result = await IdeEmpresa.findOne({ dominio: data.dominio })

        //if (result) throw new eh.KnownError('conflict', 'dominio_conflict')

        // Salvar no db
        let empresa = await IdeEmpresa.create({
            razaoSocial: data.razaoSocial,
            nomeFantasia: data.nomeFantasia,
            cnpj: data.cnpj,
            dominio: data.dominio,
            vincularDominio: data.vincularDominio,
            vars: [{
                key: 'default-project-access',
                value: 'rwa'
            }],
            criadoPor: usuarioId,
            criadoEm: new Date()
        })

        // Relacionar empresa no usuario
        let usuario = await IdeUsuario.findOne({ _id: usuarioId }).populate('conta')
        usuario.empresa = empresa._id
        await usuario.save()
        let regra = await permissao(usuario)
        let auth = await gerarToken(usuario.conta, usuario, regra)

        return auth

    } catch (err) {
        throw err
    }

}
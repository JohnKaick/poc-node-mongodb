
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeEmpresa, IdeEndereco } = db.models

module.exports = async function (usuarioId, empresaId, data) {

    try {

        // Editar e salvar no db
        const empresa = await IdeEmpresa.findById(empresaId).populate('endereco')
        await empresa.update({
            razaoSocial: data.razaoSocial,
            nomeFantasia: data.nomeFantasia,
            cnpj: data.cnpj,
            inscricaoEstadual: data.inscricaoEstadual,
            cnae: data.cnae,
            dominio: data.dominio,
            vincularDominio: data.vincularDominio,
        }, function (err, res) {
            if (err) throw new eh.KnownError('notFound', 'empresa_notSaved')
        })

        // Verifica-se o endereço existe
        if (empresa.endereco) {
            await IdeEndereco.findByIdAndUpdate(empresa.endereco._id, {
                $set: {
                    logradouro: data.logradouro,
                    numero: data.numero,
                    complemento: data.complemento,
                    cep: data.cep,
                    cidade: data.cidade,
                    estado: data.estado,
                    pais: data.pais,
                    criadoPor: usuarioId,
                    criadoEm: new Date()
                    //placeId: data.placeId
                }
            }, function (err, res) {
                if (err) throw new eh.KnownError('notFound', 'endereco_notSaved')
            })
        } else {
            const endereco = await IdeEndereco.create({
                logradouro: data.logradouro,
                numero: data.numero,
                complemento: data.complemento,
                cep: data.cep,
                cidade: data.cidade,
                estado: data.estado,
                pais: data.pais,
                criadoPor: usuarioId,
                criadoEm: new Date()
                //placeId: data.placeId
            }, async function (err, res) {
                if (err) throw new eh.KnownError('notFound', 'endereco_notSaved')
                // Relacionar o endereco na empresa
                await empresa.update({ endereco: res })
            })
        }

        return { success: true }

    } catch (err) {
        console.log(err)
    }

}
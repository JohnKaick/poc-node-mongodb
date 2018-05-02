const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqRevisao } = db.models

module.exports = async function (auth, revisaoId, data) {

    // Editar revisao
    let revisao = await ArqRevisao.findByIdAndUpdate(revisaoId, {
        $set: {
            numero: data.numero,
            nomenclatura: data.nomenclatura,
            revisao: data.revisao,
            assunto: data.assunto,
            descricao: data.descricao,
            emissao: new Date(data.emissao),
            editadoPor: auth.usuarioId,
            editadoEm: new Date()
        }
    }, { new: true })

    em.emit('revisao-editado', { revisao })

    return revisao

}
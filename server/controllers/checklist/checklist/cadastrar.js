const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkChecklist } = db.models

module.exports = async function (auth, projetoId, data) {

    // Cadastrar checklist
    let checklist = await ChkChecklist.create({
        projeto: projetoId,
        nome: data.nome,
        descritivo: data.descritivo,
        tipo: data.tipo,
        introducao: data.introducao,
        conclusao: data.conclusao,
        data: new Date(data.data),
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        empresa: auth.empresaId
    })

    em.emit('checklist-cadastrado', { checklist })

    return checklist

}


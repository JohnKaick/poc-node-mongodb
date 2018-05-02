
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto } = db.models

module.exports = async function (usuarioId, projetoId, data) {

    // Verifica-se a projeto existe
    if (!projetoId) throw new eh.KnownError('notFound', 'projeto_notFound')

    // Editar projeto
    const projeto = await IdeProjeto.findByIdAndUpdate(projetoId, {
        $set: {
            empreendimento: data.empreendimento,
            exibicao: data.exibicao,
            referencia: data.referencia,
            informacao: data.informacao,
            areaConstruida: data.areaConstruida,
            areaPrivativa: data.areaPrivativa,
            areaLocavel: data.areaLocavel,
            editadoPor: usuarioId,
            editadoEm: new Date()
        }
    }, { new: true })

    return projeto

}
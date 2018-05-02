
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeProjeto } = db.models

module.exports = async function (auth, data) {

    // Verifica-se a empresa existe
    if (!auth.empresaId) throw new eh.KnownError('notFound', 'empresa_notFound')

    // Cadastrar o projeto
    const projeto = await IdeProjeto.create({
        empresa: auth.empresaId,
        empreendimento: data.empreendimento,
        exibicao: data.exibicao,
        referencia: data.referencia,
        informacao: data.informacao,
        areaConstruida: data.areaConstruida,
        areaPrivativa: data.areaPrivativa,
        areaLocavel: data.areaLocavel,
        criadoPor: auth.usuarioId,
        criadoEm: new Date(),
        editadoEm: new Date()
    })

    return projeto
    
}
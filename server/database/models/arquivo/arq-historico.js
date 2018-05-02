module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        arquivo: { type: Types.ObjectId, ref: 'ArqArquivo' },
        tamanho: Number,
        tipo: { type: String, enum: ['u', 'd'] },
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date
    }, { collection: 'arq-historico' })

    return mongoose.model('ArqHistorico', Schema)

}
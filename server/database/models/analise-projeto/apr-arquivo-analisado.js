module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        relatorio: { type: Types.ObjectId, ref: 'AprRelatorio' },
        desenho: String,
        descricao: String,
        arquivo: { type: String, required: true },
        revisao: String,
        data: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __apRelatorioId: String
    }, { collection: 'apr-arquivo-analisado' })

    return mongoose.model('AprArquivoAnalisado', Schema)

}
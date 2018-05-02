module.exports = function (mongoose, Types) {

    const SchemaFile = mongoose.Schema({
        tamanho: Number,
        mime: String,
        extensao: String,
        carregadoEm: Date,
        token: String,
        oldToken: String
    })

    const Schema = mongoose.Schema({
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        arquivo: { type: Types.ObjectId, ref: 'ArqArquivo' },
        numero: String,
        nomenclatura: { type: String, required: true },
        revisao: String,
        assunto: String,
        descricao: String,
        emissao: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        files: [SchemaFile],
        // old
        __id: Number,
        __sid: String,
        __arquivoId: Number,
        __driverArquivoId: String
    }, { collection: 'arq-revisao' })

    return mongoose.model('ArqRevisao', Schema)

}
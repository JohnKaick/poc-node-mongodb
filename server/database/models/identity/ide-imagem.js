module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        tamanho: Number,
        tipo: String,
        extensao: String,
        token: String,
        key: String,
        url: String,
        srcVersion: String,
        carregadoEm: Date,
        carregadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        __projetoSid: String
    }, { collection: 'ide-imagem' })

    return mongoose.model('IdeImagem', Schema)

}
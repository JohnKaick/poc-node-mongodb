module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        tamanho: Number,
        tipo: String,
        token: String,
        mime: String,
        carregadoEm: Date,
        carregadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' }
    }, { collection: 'chk-imagem' })

    return mongoose.model('ChkImagem', Schema)

}
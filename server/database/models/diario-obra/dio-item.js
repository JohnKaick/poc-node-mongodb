module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        diario: { type: Types.ObjectId, ref: 'DioRegistro' },
        imagens: [{ type: Types.ObjectId, ref: 'IdeImagem' }],
        assunto: String,
        descricao: String,
        responsavel: String,
        situacao: { type: String, enum: ['finalizada', 'pendente', 'informativa'], default: 'pendente' },
        master: String,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __diarioObraId: String
    }, { collection: 'dio-item' })

    return mongoose.model('DioItem', Schema)

}
module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        grupo: { type: Types.ObjectId, ref: 'ChkGrupo' },
        imagens: [{ type: Types.ObjectId, ref: 'IdeImagem' }],
        nome: String,
        descritivo: String,
        tag: String,
        prefix: String,
        criadoEm: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' }
    }, { collection: 'chk-grupo' })

    return mongoose.model('ChkGrupo', Schema)

}
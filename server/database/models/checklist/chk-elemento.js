module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        grupo: { type: Types.ObjectId, ref: 'ChkGrupo' },
        modelo: { type: Types.ObjectId, ref: 'ChkMdElemento' },
        imagens: [{ type: Types.ObjectId, ref: 'IdeImagem' }],
        nome: String,
        descritivo: String,
        tag: String,
        situacao: { type: String, enum: ['cnf', 'ncn', 'npl', 'nnl'], default: 'cnf' },
        criadoEm: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' }
    }, { collection: 'chk-elemento' })

    return mongoose.model('ChkElemento', Schema)

}
module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        endereco: { type: Types.ObjectId, ref: 'IdeEndereco' },
        imagem: { type: Types.ObjectId, ref: 'IdeImagem' },
        razaoSocial: { type: String, required: true },
        nomeFantasia: { type: String, required: true },
        cnpj: { type: String, default: '' },
        inscricaoEstadual: { type: String, default: '' },
        cnae: { type: String, default: '' },
        dominio: { type: String, default: '' },
        vincularDominio: { type: String, default: false },
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        vars: [{
            key: { type: String, required: true },
            value: { type: String, required: true },
        }],
        // old
        __id: String,
        __sid: String
    }, { collection: 'ide-empresa' })

    return mongoose.model('IdeEmpresa', Schema)

}
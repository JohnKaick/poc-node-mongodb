module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        endereco: { type: Types.ObjectId, ref: 'IdeEndereco' },
        imagem: { type: Types.ObjectId, ref: 'IdeImagem' },
        razaoSocial: { type: String, required: true },
        nomeFantasia: { type: String, required: true },
        cnpj: { type: String, default: '' },
        inscricaoEstadual: { type: String, default: '' },
        cnae: { type: String, default: '' },
        criadoEm: Date,
        // old
        __id: String,
        __sid: String
    }, { collection: 'ide-cliente' })

    return mongoose.model('IdeCliente', Schema)

}
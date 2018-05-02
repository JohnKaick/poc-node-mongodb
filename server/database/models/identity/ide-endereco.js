module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        logradouro: String,
        numero: String,
        complemento: String,
        cep: String,
        cidade: String,
        estado: String,
        pais: String,
        placeId: String,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
    }, { collection: 'ide-endereco' })

    return mongoose.model('IdeEndereco', Schema)

}
module.exports = function (mongoose, Types) {

    const SchemaPropriedade = mongoose.Schema({
        nome: String,
        valor: String,
        // old
        __id: String,
        __sid: String
    })

    const Schema = mongoose.Schema({
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        cliente: { type: Types.ObjectId, ref: 'IdeCliente' },
        propriedades: [SchemaPropriedade],
        imagens: [{ type: Types.ObjectId, ref: 'IdeImagem' }],
        empreendimento: String,
        exibicao: String,
        referencia: String,
        informacao: String,
        areaConstruida: Number,
        areaPrivativa: Number,
        areaLocavel: Number,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __sid: String,
    }, { collection: 'ide-projeto' })

    return mongoose.model('IdeProjeto', Schema)

}
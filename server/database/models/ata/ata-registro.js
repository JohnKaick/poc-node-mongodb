module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        dataHora: Date,
        nome: String,
        local: String,
        pauta: String,
        numero: Number,
        situacao: { type: String, enum: ['iniciada', 'finalizada', 'transmitida'], default: 'iniciada' },
        master: String,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __projetoSid: String
    }, { collection: 'ata-registro' })

    return mongoose.model('AtaRegistro', Schema)

}
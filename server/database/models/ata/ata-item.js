module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        ata: { type: Types.ObjectId, ref: 'AtaRegistro' },
        assunto: String,
        descricao: String,
        responsavel: String,
        prazo: Date,
        situacao: { type: String, enum: ['finalizada', 'pendente', 'informativa'], default: 'pendente' },
        indice: Number,
        revisao: Number,
        master: String,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __ataId: String
    }, { collection: 'ata-item' })

    return mongoose.model('AtaItem', Schema)

}
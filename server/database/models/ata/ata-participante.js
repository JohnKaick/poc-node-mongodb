module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        ata: { type: Types.ObjectId, ref: 'AtaRegistro' },
        colaborador: { type: Types.ObjectId, ref: 'IdeColaborador' },
        presente: Boolean,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        // old
        __id: String,
        __ataId: String,
        __participanteId: String,
    }, { collection: 'ata-participante' })

    return mongoose.model('AtaParticipante', Schema)

}
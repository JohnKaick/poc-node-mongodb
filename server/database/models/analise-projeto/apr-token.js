module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        relatorio: { type: Types.ObjectId, ref: 'AprRelatorio' },
        participante: { type: Types.ObjectId, ref: 'AprParticipante' },
        token: String,
        respondido: Boolean,
        validade: Date,
        indice: Number,
        // old
        __id: String,
        __colaboradorId: String,
        __apRelatorioId: String
    }, { collection: 'apr-token' })

    return mongoose.model('AprToken', Schema)

}
module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        relatorio: { type: Types.ObjectId, ref: 'AprRelatorio' },
        colaborador: { type: Types.ObjectId, ref: 'IdeColaborador' },
        responsavel: Boolean,
        // old
        __id: String,
        __relatorioId: String,
        __colaboradorId: String,
    }, { collection: 'apr-participante' })

    return mongoose.model('AprParticipante', Schema)

}
module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        checklist: { type: Types.ObjectId, ref: 'ChkChecklist' },
        elementos: [{ type: Types.ObjectId, ref: 'ChkElemento' }],
        anomalias: [{ type: Types.ObjectId, ref: 'ChkElementoAnomalia' }],
        situacao: String,
        criadoEm: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' }
    }, { collection: 'chk-checklist-elemento' })

    return mongoose.model('ChkChecklistElemento', Schema)

}
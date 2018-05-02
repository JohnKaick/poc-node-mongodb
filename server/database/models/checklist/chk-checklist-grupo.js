module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        checklist: { type: Types.ObjectId, ref: 'ChkChecklist' },
        grupos: [{ type: Types.ObjectId, ref: 'ChkGrupo' }],
        anomalias: [{ type: Types.ObjectId, ref: 'ChkGrupoAnomalia' }],
        situacao: String,
        criadoEm: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' }
    }, { collection: 'chk-checklist-grupo' })

    return mongoose.model('ChkChecklistGrupo', Schema)

}
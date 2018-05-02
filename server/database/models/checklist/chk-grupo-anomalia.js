module.exports = function (mongoose, Types) {

    const GravidadeSchema = mongoose.Schema({
        nome: String,
        g: Number,
        u: Number,
        t: Number,
        referencia: Types.ObjectId
    })

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        checklist: { type: Types.ObjectId, ref: 'ChkChecklist' },
        grupo: { type: Types.ObjectId, ref: 'ChkGrupo' },
        modelo: { type: Types.ObjectId, ref: 'ChkMdGrupoAnomalia' },
        imagens: [{ type: Types.ObjectId, ref: 'IdeImagem' }],
        comentarios: String,
        situacao: { type: String, enum: ['cnf', 'ncn', 'npl', 'nnl'], default: 'cnf' },
        classificacao: { type: String, enum: ['end', 'exg', 'ntr', 'fnc'], default: 'end' },
        falha: { type: String, enum: ['pln', 'exc', 'opr', 'grn'], default: 'exc' },
        gravidade: GravidadeSchema,
        criadoEm: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' }
    }, { collection: 'chk-grupo-anomalia' })

    return mongoose.model('ChkGrupoAnomalia', Schema)

}
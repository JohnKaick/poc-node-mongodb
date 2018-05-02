module.exports = function (mongoose, Types) {

    const RegraSchema = mongoose.Schema({
        usuario: { type: Types.ObjectId, ref: 'IdeUsuario' },
        tipo: { type: String, enum: ['read', 'read-write', 'block'] },
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date
    })

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        disciplina: { type: Types.ObjectId, ref: 'ChkDisciplina' },
        nome: { type: String, required: true },
        regraPadrao: { type: String, enum: ['read', 'read-write', 'block'], default: 'block' },
        regras: [RegraSchema],
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: Number,
        __sid: String,
        __projetoSid: String,
        __disciplinaSid: String,
    }, { collection: 'arq-pasta' })

    return mongoose.model('ArqPasta', Schema)

}
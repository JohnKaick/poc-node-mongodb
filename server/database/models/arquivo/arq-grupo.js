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
        pasta: { type: Types.ObjectId, ref: 'ArqPasta' },
        grupo: { type: Types.ObjectId, ref: 'ArqGrupo' },
        nome: { type: String, required: true },
        mask: String,
        regraPadrao: { type: String, enum: ['read', 'read-write', 'block'], default: 'read' },
        regras: [RegraSchema],
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: Number,
        __sid: String,
        __pastaId: Number,
        __grupoId: Number,
    }, { collection: 'arq-grupo' })

    return mongoose.model('ArqGrupo', Schema)

}
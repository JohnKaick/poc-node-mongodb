module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        grupo: { type: Types.ObjectId, ref: 'ArqGrupo' },
        situacao: { type: String, enum: ['bloqueado', 'disponivel'] },
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: Number,
        __sid: String,
        __grupoId: Number,
    }, { collection: 'arq-arquivo' })

    return mongoose.model('ArqArquivo', Schema)

}
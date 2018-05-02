module.exports = function (mongoose, Types) {

    const SchemaRelatorio = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        nome: { type: String, required: true },
        revisao: String,
        dataRevisao: Date,
        status: String,
        type: String,
        revision: Number,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: Number,
        __sid: String,
        __projetoId: Number,
    }, { collection: 'chk-relatorio' })

    const SchemaRelatorioPropriedade = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        relatorio: { type: Types.ObjectId, ref: 'ChkRelatorio' },
        nome: { type: String, required: true },
        valor: String,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: Number,
        __sid: String,
        __relatorioId: Number,
    }, { collection: 'chk-relatorio-propriedade' })

    return mongoose.model('ChkRelatorio', SchemaRelatorio)
    return mongoose.model('ChkRelatorioPropriedade', SchemaRelatorioPropriedade)

}

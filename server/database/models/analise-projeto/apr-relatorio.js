module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        disciplina: { type: Types.ObjectId, ref: 'ChkDisciplina' },
        arquivos: [{ type: Types.ObjectId, ref: 'AprArquivoAnalisado' }],
        titulo: String,
        revisao: String,
        data: Date,
        indice: Number,
        fechadaEm: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __projetoSid: String,
        __disciplinaSid: String
    }, { collection: 'apr-relatorio' })

    return mongoose.model('AprRelatorio', Schema)

}
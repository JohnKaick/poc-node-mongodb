module.exports = function (mongoose, Types) {

    const SchemaReplica = mongoose.Schema({
        participante: { type: Types.ObjectId, ref: 'AprParticipante' },
        token: { type: Types.ObjectId, ref: 'AprToken' },
        mensagem: { type: String, required: true },
        situacaoSugerida: { type: String, enum: ['pendente', 'informativo', 'finalizado'], default: 'pendente' },
        aprovadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __apItemId: String,
        __colaboradorId: String,
        __apTokenId: String,
    })

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        relatorio: { type: Types.ObjectId, ref: 'AprRelatorio' },
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        replicas: [SchemaReplica],
        escopo: String,
        anomalia: { type: String, required: true },
        assunto: String,
        situacao: { type: String, enum: ['pendente', 'informativo', 'finalizado'], default: 'pendente' },
        posicao: { type: Number, required: true },
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __projetoSid: String,
        __apRelatorioId: String
    }, { collection: 'apr-item' })

    return mongoose.model('AprItem', Schema)

}
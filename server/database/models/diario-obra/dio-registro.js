module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        descricao: String,
        local: String,
        dataHora: Date,
        responsavel: String,
        tempoManha: { type: String, enum: ['limpo', 'nublado', 'chuva', 'impraticavel'], default: 'limpo' },
        tempoTarde: { type: String, enum: ['limpo', 'nublado', 'chuva', 'impraticavel'], default: 'limpo' },
        tempoNoite: { type: String, enum: ['limpo', 'nublado', 'chuva', 'impraticavel'], default: 'limpo' },
        master: String,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __projetoId: String
    }, { collection: 'dio-registro' })

    return mongoose.model('DioRegistro', Schema)

}
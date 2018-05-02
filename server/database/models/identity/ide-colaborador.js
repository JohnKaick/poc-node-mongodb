module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        nome: String,
        sobrenome: String,
        email: String,
        cliente: String,
        area: String,
        cargo: String,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        criadoEm: Date,
        editadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
        editadoEm: Date,
        // old
        __id: String,
        __empresaSid: String
    }, { collection: 'ide-colaborador' })

    return mongoose.model('IdeColaborador', Schema)

}
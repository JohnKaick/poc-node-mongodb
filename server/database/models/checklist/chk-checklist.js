module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        nome: String,
        descritivo: String,
        tipo: String,
        introducao: String,
        conclusao: String,
        data: Date,
        criadoEm: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' }
    }, { collection: 'chk-checklist' })

    return mongoose.model('ChkChecklist', Schema)

}
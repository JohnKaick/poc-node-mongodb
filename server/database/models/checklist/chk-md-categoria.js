module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        disciplina: { type: Types.ObjectId, ref: 'ChkDisciplina' },
        nome: String,
        descritivo: String
    }, { collection: 'chk-md-categoria' })

    return mongoose.model('ChkMdCategoria', Schema)

}
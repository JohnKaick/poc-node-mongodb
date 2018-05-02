module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        nome: String,
    }, { collection: 'chk-disciplina' })

    return mongoose.model('ChkDisciplina', Schema)

}
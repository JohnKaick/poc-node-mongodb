module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        disciplina: { type: Types.ObjectId, ref: 'ChkDisciplina' },
        pasta: { type: Types.ObjectId, ref: 'ChkMdPasta' },
        categoria: { type: Types.ObjectId, ref: 'ChkCategoria' },
        nome: String,
        descritivo: String,
        prefix: String,
        metodo: String,
        vidaUtil: Number,
        pesoGut: Number
    }, { collection: 'chk-md-elemento' })

    return mongoose.model('ChkMdElemento', Schema)

}
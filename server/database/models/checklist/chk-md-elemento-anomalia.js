module.exports = function (mongoose, Types) {

    const GravidadeSchema = mongoose.Schema({
        nome: String,
        g: Number,
        u: Number,
        t: Number
    })

    const Schema = mongoose.Schema({
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        disciplina: { type: Types.ObjectId, ref: 'ChkDisciplina' },
        pasta: { type: Types.ObjectId, ref: 'ChkMdPasta' },
        elemento: { type: Types.ObjectId, ref: 'ChkMdElemento' },
        exibicao: String,
        descritivo: String,
        caracteristica: String,
        questao: String,
        diagnostico: String,
        gravidades: [GravidadeSchema]
    }, { collection: 'chk-md-anomalia' })

    return mongoose.model('ChkMdElementoAnomalia', Schema)

}
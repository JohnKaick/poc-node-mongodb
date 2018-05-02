module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        conta: { type: Types.ObjectId, ref: 'IdeConta' },
        login: { type: String, required: true },
        hashSenha: { type: String, required: true },
        sucesso: Boolean,
        detalhe: String,
        criadoEm: Date,
        // old
        __id: String
    }, { collection: 'ide-attempt' })

    return mongoose.model('IdeAttempt', Schema)

}
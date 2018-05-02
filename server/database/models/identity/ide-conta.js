module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        usuario: { type: Types.ObjectId, ref: 'IdeUsuario' },
        login: { type: String, required: true },
        hashSenha: { type: String, required: true },
        tokenSenha: { type: String, default: '' },
        tokenEmail: { type: String, default: '' },
        ultimaTrocaSenha: Date,
        emailVerificado: { type: Boolean, default: false },
        bloqueado: { type: Boolean, default: false },
        criadoEm: Date,
        // old
        __id: String,
        __usuarioId: String,
    }, { collection: 'ide-conta' })

    return mongoose.model('IdeConta', Schema)

}
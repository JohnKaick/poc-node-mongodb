module.exports = function (mongoose, Types) {

        const Schema = mongoose.Schema({
                conta: { type: Types.ObjectId, ref: 'IdeConta' },
                empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
                endereco: { type: Types.ObjectId, ref: 'IdeEndereco' },
                permissoes: [{ type: Types.ObjectId, ref: 'IdePermissao' }],
                nome: { type: String, required: true },
                sobrenome: { type: String, default: '' },
                exibicao: { type: String, required: true },
                email: { type: String, required: true },
                avatar: { type: String, default: 'https://s3-sa-east-1.amazonaws.com/ativati/wisein/public/avatar_default.png' },
                telefone: { type: String, default: '' },
                celular: { type: String, default: '' },
                criadoEm: Date,
                // old
                __id: String,
                __empresaSid: String
        }, { collection: 'ide-usuario' })

        return mongoose.model('IdeUsuario', Schema)

}
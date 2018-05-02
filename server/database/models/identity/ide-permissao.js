module.exports = function (mongoose, Types) {

    const Schema = mongoose.Schema({
        usuario: { type: Types.ObjectId, ref: 'IdeUsuario' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        escopo: { type: String, enum: ['e', 'p'] },
        acessos: [{
            modulo: {
                type: String,
                enum: ['emp', 'prj', 'usr', 'anl', 'arq', 'atr', 'drb', 'chc']
            },
            nivel: { 
                type: String,
                enum: ['b', 'r', 'rw', 'rwa']
            },
            restricoes: [{ 
                type: String 
            }]
        }],
        atribuidoPor: { type: Types.ObjectId, ref: 'IdeUsuario' },
    }, { collection: 'ide-permissao' })

    return mongoose.model('IdePermissao', Schema)

}
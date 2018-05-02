const passwordHash = require('password-hash')
const uuid = require('uuid')

const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { IdeUsuario, IdeConta, IdeEmpresa } = db.models

async function analiseDominio(email) {
    let _separa = email.split('@')
    let _dominio = _separa[1]
    let _empresa = await IdeEmpresa.findOne({ dominio: _dominio })
    if (_empresa && _empresa.vincularDominio) return _empresa._id
    else return null
}

module.exports = async function (data, reqApp) {

    let existente = await IdeUsuario.findOne({ email: data.email })

    if(existente) {
        throw new eh.KnownError('conflict', 'email_conflict')
    }

    const usuario = new IdeUsuario({
        nome: data.exibicao,
        exibicao: data.exibicao,
        email: data.email,
        criadoEm: new Date()
    })

    const conta = new IdeConta({
        login: data.email,
        hashSenha: passwordHash.generate(data.senha),
        tokenEmail: uuid.v4(),
        ultimaTrocaSenha: new Date(),
        emailVerificado: reqApp.emailValido || false,
        bloqueado: false,
        criadoEm: new Date()
    })

    // Analisa-se o usuário possui empresa pelo dominio informado
    const empresa = await analiseDominio(data.email)
    usuario.empresa = empresa

    // Salvar os dados
    await usuario.save(function (err, res) {
        if (err) throw new eh.KnownError('notFound', 'user_notSaved')
        em.emit('usuario-cadastrado', { res })
        conta.usuario = res._id
    })

    await conta.save(function (err, res) {
        if (err) throw new eh.KnownError('notFound', 'conta_notSaved')
        usuario.conta = res._id
    })

    await usuario.save(function (err, res) {
        if (err) throw new eh.KnownError('notFound', 'user_notSaved')
    })

    em.emit('conta-cadastro', { conta: conta, usuario: usuario, reqApp: reqApp })

    return { success: true }

}
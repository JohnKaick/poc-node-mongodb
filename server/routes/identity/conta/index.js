const {
    autenticar,
    alterarSenha,
    confirmarConta,
    recuperarSenha,
    recuperarSenhaCb,
    cadastrar,
    obterStatusServidor
} = require('./handlers')

module.exports = [
    {
        path: '/identity/conta/autenticar',
        method: 'POST',
        config: {
            auth: false,
            handler: autenticar
        }
    },
    {
        path: '/identity/conta/alterar-senha',
        method: 'POST',
        config: {
            handler: alterarSenha
        }
    },
    {
        path: '/identity/conta/confirmar-conta/{token}',
        method: 'POST',
        config: {
            auth: false,
            handler: confirmarConta
        }
    },
    {
        path: '/identity/conta/recuperar-senha',
        method: 'POST',
        config: {
            auth: false,
            handler: recuperarSenha
        }
    },
    {
        path: '/identity/conta/recuperar-senha-cb/{token}',
        method: 'POST',
        config: {
            auth: false,
            handler: recuperarSenhaCb
        }
    },
    {
        path: '/identity/conta/cadastrar',
        method: 'POST',
        config: {
            auth: false,
            handler: cadastrar
        }
    },
    {
        path: '/identity/server-status',
        method: 'get',
        config: {
            auth: false,
            handler: obterStatusServidor
        }
    }
]
const should = require('should')
const helpers = require('./helpers')
const server = helpers.getServer()

// onde manter a regra padrão de acesso dos usuários da empresa?

describe('ciclo de vida permissão', function () {

    before(async () => {
        this.timeout(6000)
        await helpers.reciclarBase()
    })

    it('cadastro de usuário jonas', async () => {
        let response = await server.inject({
            method: 'post',
            url: '/identity/conta/cadastrar',
            payload: {
                exibicao: 'Jonas',
                email: 'jonas@alfaengenharia.com.br',
                senha: 'jj001010'
            },
            app: {
                emailValido: true
            }
        })
        should(response.statusCode).eql(200)
        should(response.result.success).true()
    })

    it('autenticando jonas', async () => {
        let response = await server.inject({
            method: 'post',
            url: '/identity/conta/autenticar',
            payload: {
                login: 'jonas@alfaengenharia.com.br',
                senha: 'jj001010'
            }
        })
        should(response.statusCode).eql(200)
        should(response.result).be.an.Object()
        should(response.result.token).be.a.String()
        should(response.result.usuario).be.an.Object()
        this.defaultHeaders = {
            Authorization: response.result.token
        }
    })

    it('cadastrando empresa alfa engenharia com o usuário jonas - renovando token', async () => {
        let response = await server.inject({
            method: 'put',
            url: '/identity/empresa/cadastrar',
            headers: this.defaultHeaders,
            payload: {
                razaoSocial: 'Alfa Engenharia',
                nomeFantasia: 'Alfa',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                dominio: 'alfaengenharia.com.br',
                vincularDominio: true
            }
        })
        should(response.statusCode).eql(200)
        should(response.result).be.an.Object()
        should(response.result.token).be.a.String()
        should(response.result.usuario).be.an.Object()
        this.adminLogado = response.result
        this.defaultHeaders = {
            Authorization: response.result.token
        }
    })

    it('cadastrando projeto projeto1', async () => {
        let response = await server.inject({
            method: 'put',
            url: '/identity/projeto/cadastrar',
            headers: this.defaultHeaders,
            payload: {
                empreendimento: 'Projeto 1',
                exibicao: 'Projeto 1',
                referencia: '001-projeto-um',
                informacao: 'informacao do projeto 1',
                areaConstruida: 0,
                areaPrivativa: 0,
                areaLocavel: 0
            }
        })
        should(response.statusCode).eql(200)
        // tipos
        should(response.result.empreendimento).be.a.String()
        should(response.result.exibicao).be.a.String()
        should(response.result.referencia).be.a.String()
        should(response.result.informacao).be.a.String()
        should(response.result.areaConstruida).be.a.Number()
        should(response.result.areaPrivativa).be.a.Number()
        should(response.result.areaLocavel).be.a.Number()
        // valores
        should(response.result.empreendimento).equal('Projeto 1')
        should(response.result.exibicao).equal('Projeto 1')
        should(response.result.referencia).equal('001-projeto-um')
        should(response.result.informacao).equal('informacao do projeto 1')
        should(response.result.areaConstruida).equal(0)
        should(response.result.areaPrivativa).equal(0)
        should(response.result.areaLocavel).equal(0)
    })

    it('cadastrar usuário james com mesmo subdomínio do jonas', async () => {
        let response = await server.inject({
            method: 'post',
            url: '/identity/conta/cadastrar',
            payload: {
                exibicao: 'James',
                email: 'james@alfaengenharia.com.br',
                senha: 'jj001015'
            },
            app: {
                emailValido: true
            }
        })
        should(response.statusCode).eql(200)
        should(response.result.success).true()
    })

    it('autenticando james e verificar se está na mesma empresa', async () => {
        let response = await server.inject({
            method: 'post',
            url: '/identity/conta/autenticar',
            payload: {
                login: 'james@alfaengenharia.com.br',
                senha: 'jj001015'
            }
        })
        should(response.statusCode).eql(200)
        should(response.result).be.an.Object()
        should(response.result.token).be.a.String()
        should(response.result.usuario).be.an.Object()
        should(response.result.usuario.empresaId).equal(this.adminLogado.usuario.empresaId)
        this.defaultJamesHeaders = {
            Authorization: response.result.token
        }
    })

    it('obtendo lista de projetos e verificando participaçao no projeto1', async () => {
        let response = await server.inject({
            method: 'get',
            url: '/identity/projeto/obter-todos',
            headers: this.defaultJamesHeaders,
        })
        should(response.statusCode).eql(200)
        should(response.result).be.an.Array()
        should(response.result).has.length(1)
    })

    it('cadastrar usuário dina com subdomínio diferente', async () => {
        let response = await server.inject({
            method: 'post',
            url: '/identity/conta/cadastrar',
            payload: {
                exibicao: 'Dina',
                email: 'dina@outlook.com',
                senha: 'dina123'
            },
            app: {
                emailValido: true
            }
        })
        should(response.statusCode).eql(200)
        should(response.result.success).true()
    })

    it('autenticando dina que deve vir sem empresa', async () => {
        let response = await server.inject({
            method: 'post',
            url: '/identity/conta/autenticar',
            payload: {
                login: 'dina@outlook.com',
                senha: 'dina123'
            }
        })
        should(response.statusCode).eql(200)
        should(response.result).be.an.Object()
        should(response.result.token).be.a.String()
        should(response.result.usuario).be.an.Object()
        should(response.result.usuario.empresaId).undefined()
        this.defaultDinaHeaders = {
            Authorization: response.result.token
        }
    })

    it('obtendo lista de projetos que deve vir vazia', async () => {
        let response = await server.inject({
            method: 'get',
            url: '/identity/projeto/obter-todos',
            headers: this.defaultDinaHeaders
        })
        let result = response.result
        should(response.statusCode).eql(200)
        should(result).be.an.Array()
        should(response.result).has.length(0)
    })

    


    // admin deve criar um checklist e atribuir o novo usuário

    // enviar convite para acessar projeto1 limitado a módulo de analise de projeto

    // verificar acesso

})
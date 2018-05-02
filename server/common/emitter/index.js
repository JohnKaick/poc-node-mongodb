const events = require('events')
const eventEmitter = new events.EventEmitter()
const Mailer = require('./../mailer')
const _ = require('lodash')
const validarEmail = require('./../helpers/validar-email')
const db = require('database')
const { AtaRegistro } = db.models

eventEmitter.on('login-attempt', function ({ data, conta }) {
})

eventEmitter.on('conta-cadastro', function ({ conta, usuario, reqApp }) {

    if (!conta.emailVerificado) {

        mail = new Mailer({
            titulo: 'Bem vindo',
            destinatarios: [{
                email: usuario.email,
                nome: usuario.nome
            }],
            templateName: 'conta-cadastro.hbs',
            model: { conta, usuario }
        })

        mail.send()

    }

})

eventEmitter.on('conta-recuperar', function (conta) {
    // Enviar e-mail para recuperação de conta
    mail = new Mailer({
        titulo: 'Recuperar conta',
        destinatarios: [{
            email: conta.usuario.email,
            nome: conta.usuario.nome
        }],
        templateName: 'conta-recuperar.hbs',
        model: conta
    })
    mail.send()
})

eventEmitter.on('ata-transmitir', function (model) {

    let participantes = _.chain(model.participantes).map((p) => {
        return { email: p.email, nome: p.nome }
    }).filter((p) => {
        return validarEmail(p.email)
    }).value()

    let mail = new Mailer({
        titulo: 'Ata: ' + model.ata.nome,
        destinatarios: participantes,
        templateName: 'ata-reuniao.hbs',
        model: {
            detalhes: model.ata,
            participantes: _.map(model.participantes, (p) => {
                return {
                    nome: p.nome,
                    area: p.area,
                    empresa: p.empresa,
                    presente: p.presente ? 'Sim' : 'Não'
                }
            }),
            itens: model.itens
        }
    })
    mail.send()

    AtaRegistro.findByIdAndUpdate(model.ata._id, { $set: { situacao: 'transmitida' } })
})

eventEmitter.on('analise-projeto-transmitir', function (model) {

    let participantes = _.chain(model.participantes).map((p) => {
        return { email: p.email, nome: p.nome }
    }).filter((p) => {
        return validarEmail(p.email)
    }).value()

    let mail = new Mailer({
        titulo: 'Análise de projeto: ' + model.relatorio.titulo,
        destinatarios: participantes,
        templateName: 'ap-relatorio.hbs',
        model: {
            detalhes: model.relatorio,
            participantes: _.map(model.participantes, (p) => {
                return {
                    nome: p.nome,
                    area: p.area,
                    empresa: p.empresa,
                    responsavel: p.responsavel ? 'Sim' : 'Não'
                }
            }),
            grupos: model.grupos,
            arquivos: model.arquivos
        }
    })
    mail.send()

})

eventEmitter.on('diario-obra-transmitir', function (model) {

    let participantes = _.chain(model.participantes).map((p) => {
        return { email: p.email, nome: p.nome }
    }).filter((p) => {
        return validarEmail(p.email)
    }).value()

    let mail = new Mailer({
        titulo: 'Diário de obra: ' + model.diario.descricao,
        destinatarios: participantes,
        templateName: 'diario-obra.hbs',
        model: {
            detalhes: model.diario,
            participantes: _.map(model.participantes, (p) => {
                return {
                    nome: p.nome,
                    area: p.area,
                    empresa: p.empresa,
                    presente: p.presente ? 'Sim' : 'Não'
                }
            }),
            itens: model.itens
        }
    })
    mail.send()

})

module.exports = eventEmitter
const fs = require('fs')
const handlebars = require('handlebars')
const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN })
const moment = require('moment');

async function renderizarTemplate(templateName, dados) {

    handlebars.registerHelper('counter', function (index) {
        return index + 1;
    });

    handlebars.registerHelper('status', function (key) {
        if (key === 'informativa' || key === 'informativo') {
            return 'Informativo';
        } else if (key === 'finalizada' || key === 'finalizado') {
            return 'Finalizado';
        } else {
            return 'Pendência';
        }
    });

    handlebars.registerHelper('tempo', function (key) {
        if (key === 'limpo') {
            return 'Limpo';
        } else if (key === 'nublado') {
            return 'Nublado';
        } else if (key === 'chuva') {
            return 'Chuva';
        } else {
            return 'Impraticavel';
        }
    });

    handlebars.registerHelper('date', function (date) {
        return moment(date).format('DD/MM/YYYY');
    });

    handlebars.registerHelper('ifCond', function (v1, v2, options) {
        if (v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    let arquivo = await fs.readFileSync(__dirname + "/templates/" + templateName, "utf8")
    let template = await handlebars.compile(arquivo)
    let mensagem = await template(dados)
    return mensagem
}

async function ordenarEmails(destinatarios) {
    let result = ''
    for (let d of destinatarios) {
        result = result + d.email + ', '
    }
    return result
}

async function opcoesEmail(assunto, email, msg) {
    return {
        from: process.env.MAILGUN_USER,
        to: 'noreply@wisein.co',
        bcc: email,
        subject: assunto,
        html: msg
    }
}

async function enviarEmail(data) {
    return mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
}

class Mailer {
    constructor(options) {
        options = options || {};
        this.from = options.origem || 'noreply@wisein.co';
        this.destinatarios = options.destinatarios;
        this.titulo = options.titulo;
        this.model = options.model;
        this.templateName = options.templateName;
    }

    async send() {
        let template = await renderizarTemplate(this.templateName, this.model)
        let emails = await ordenarEmails(this.destinatarios)
        let options = await opcoesEmail(this.titulo, emails, template)
        await enviarEmail(options)
    }
}

module.exports = Mailer
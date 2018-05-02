
/*
Classificação das Anomalias e Falhas
    As anomalias e falhas constituem não conformidades que impactam na perda precoce de desempenho real ou de futuros elementos, e sistemas construtivos, reduzindo a vida útil projetada, e assim comprometendo a segurança, funcionalidade, durabilidade, operacionalidade, saúde dos usuários, conforto térmico, acústico e luminoso, acessibilidade, vida útil.
    As anomalias são classificadas das seguintes formas:
•    Endógena – Originaria da própria edificação
•    Exógena – Originaria de fatores externos a edificação, causado por terceiros.
•    Natural – Originaria de fenômenos da natureza
•    Funcional – Originaria da degradação de sistemas construtivos pelo envelhecimento natural, ou termino da vida útil.


[3:19] 
As falhas são classificadas das seguintes formas:
•    Planejamento – Decorrentes de falhas de procedimentos e especificações inadequadas do plano de manutenção, sem aderência a questões técnicas. Há falhas relacionadas às periodicidades da execução.
•    Execução – Associada à manutenção proveniente de falhas causadas pela execução inadequada de procedimentos e atividades do plano de manutenção.
•    Operacionais – Relativas aos procedimentos inadequados de registros, controles, rondas e demais atividades pertinentes.
•    Gerenciais – Decorrentes da falta de controles de qualidade dos serviços de manutenção, bem como da falta de acompanhamento de custos da mesma.
*/


module.exports = function (mongoose, Types) {

    const GravidadeSchema = mongoose.Schema({
        nome: String,
        g: Number,
        u: Number,
        t: Number,
        referencia: Types.ObjectId
    })

    const Schema = mongoose.Schema({
        projeto: { type: Types.ObjectId, ref: 'IdeProjeto' },
        empresa: { type: Types.ObjectId, ref: 'IdeEmpresa' },
        checklist: { type: Types.ObjectId, ref: 'ChkChecklist' },
        grupo: { type: Types.ObjectId, ref: 'ChkGrupo' },
        elemento: { type: Types.ObjectId, ref: 'ChkElemento' },
        modelo: { type: Types.ObjectId, ref: 'ChkMdElementoAnomalia' },
        imagens: [{ type: Types.ObjectId, ref: 'IdeImagem' }],
        comentarios: String,
        classificacao: { type: String, enum: ['end', 'exg', 'ntr', 'fnc'], default: 'end' },
        falha: { type: String, enum: ['pln', 'exc', 'opr', 'grn'], default: 'exc' },
        gravidade: GravidadeSchema,
        criadoEm: Date,
        criadoPor: { type: Types.ObjectId, ref: 'IdeUsuario' }
    }, { collection: 'chk-elemento-anomalia' })

    return mongoose.model('ChkElementoAnomalia', Schema)

}
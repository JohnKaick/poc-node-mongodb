module.exports = `
type IdeProjetoPropriedade {
    id: ID!
    nome: String
    valor: String
}
type IdeProjeto {
    id: ID!
    exibicao: String
    empreendimento: String
    informacao: String
    areaConstruida: Float
    areaPrivativa: Float
    areaLocavel: Float
    criadoEm: String,
    criadoPor: String,
    propriedades: [IdeProjetoPropriedade]
}
`
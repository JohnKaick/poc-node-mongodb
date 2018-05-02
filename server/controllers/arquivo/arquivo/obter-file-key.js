module.exports = (empresaId, projetoId, arquivoId, token) => {
    return 'wisein/empresas/' + empresaId + '/' + projetoId + '/arquivos/' + arquivoId + '/' + token
}
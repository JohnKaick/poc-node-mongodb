module.exports = function (itens) {

    // 'itens' criação de uma nova array vazia
    let novosItens = []

    // criação de um loop para cada 'item'
    itens.forEach((item) => {

        // 'novoItem' criação de um novo objeto
        let novoItem = {
            id: item.id,
            ap_relatorio_id: item.ap_relatorio_id,
            escopo: item.escopo,
            anomalia: item.anomalia,
            assunto: item.assunto,
            situacao: item.situacao,
            created_at: item.created_at
        }

        // 'adicionarItem' criacao de uma controller variavel boleano 
        let adicionarItem = true

        // adicionando uma array 'replicas' vazia no objeto 'novoItem'
        novoItem.replicas = []

        //ANALISE
        // criação de um loop para cada 'replica' do 'item.replica'
        item.replicas.forEach((replica) => {

            // SE a 'replica' possui a coluna 'aprovada_por' preenchida, incluir a replica analisada em 'novoItem.replicas'
            if (replica.aprovadoPor) {
                novoItem.replicas.push(replica)
            }

        })
        // FIM DA ANALISE

        // SE a 'adicionarItem' for 'true', adicionar o 'novoItem' na array vazia 'itens'
        if (adicionarItem) {
            novosItens.push(novoItem)
        }
    })

    // Retorna o 'novoRelatorio'
    return novosItens
}
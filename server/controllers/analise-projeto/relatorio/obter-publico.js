const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { AprRelatorio, AprToken, AprArquivoAnalisado, AprItem } = db.models

const filtrar = require('./helpers/filtrar')

async function compararArrays(itens, replicas) {
    let _items = []
    for (let item of itens) {
        item.replicas = []
        for (let rep of replicas) {
            if (rep.item == item._id) {
                item.replicas.push(rep)
            }
        }
        _items.push(item)
    }
    return _items
}

module.exports = async function (token) {

    // Obtem relatorio pelo token
    let _token = await AprToken.findById(token)

    let relatorio = await AprRelatorio.findById(_token.relatorio).populate({ path: 'participante', populate: 'colaborador' })

    let arquivos = await AprArquivoAnalisado.find({ relatorio: relatorio }).sort({ arquivo: 'asc' })

    relatorio.arquivos = arquivos

    let itens = await AprItem.find({ relatorio: relatorio })

    let res = await compararArrays(itens, replicas)

    relatorio.itens = res

    let filtrado = await filtrar(relatorio, token)

    return filtrado

}
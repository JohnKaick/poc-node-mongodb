const _ = require('lodash')

module.exports = async function (itens) {
    var result = []
    var grouped = _.groupBy(itens, 'assunto')
    var assuntos = _.sortBy(_.keys(grouped), 'asc')
    var rootIndex = 1
    for (let a of assuntos) {
        var obj = {
            label: a != 'null' ? a : 'Sem Título',
            rootIndex: rootIndex++,
            itens: grouped[a]
        }
        result.push(obj)
    }

    return result
}
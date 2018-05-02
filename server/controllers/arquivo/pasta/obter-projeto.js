const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqPasta } = db.models

module.exports = async function (projetoId) {

    // Obter todas as pastas do projeto

    let pastas = await ArqPasta.aggregate([
        {
            $match: {
                projeto: db.Types.ObjectId(projetoId)
            }
        },
        {
            $lookup: {
                from: 'arq-grupo',
                localField: '_id',
                foreignField: 'pasta',
                as: 'grupos'
            }
        }
    ])

    em.emit('pastas-obtidas', { pastas })

    return pastas

}


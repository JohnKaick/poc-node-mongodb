const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkMdElemento } = db.models

module.exports = async function (mdElementoId) {

    // Obter elemento
    let elemento = await ChkMdElemento.aggregate([
        {
            $match: {
                _id: db.Types.ObjectId(mdElementoId)
            }
        },
        {
            $lookup: {
                from: 'chk-md-anomalia',
                localField: '_id',
                foreignField: 'elemento',
                as: 'anomalias'
            }
        }
    ])

    em.emit('mdElemento-obtida', { elemento })

    return elemento[0]

}


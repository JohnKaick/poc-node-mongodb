const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqRevisao, ArqArquivo } = db.models

module.exports = async function (grupoId) {

    // Obter arquivo e revisao

    let arquivos = await ArqArquivo.aggregate([
        {
            $match: {
                grupo: db.Types.ObjectId(grupoId)
            }
        },
        {
            $lookup: {
                from: 'arq-revisao',
                localField: '_id',
                foreignField: 'arquivo',
                as: 'revisoes'
            }
        },
        { $unwind: "$revisoes" },
        { $sort: { "revisoes.criadoEm": -1 } },
        {
            $group: {
                _id: "$_id",
                grupo: { $first: "$grupo" },
                situacao: { $first: "$situacao" },
                criadoEm: { $first: "$criadoEm" },
                editadoEm: { $first: "$editadoEm" },
                revisoes: { $push: "$revisoes" }
            }
        }
    ])

    em.emit('arquivos-revisoes-obtidos', { arquivos })

    return arquivos

}
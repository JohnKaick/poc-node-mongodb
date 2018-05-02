const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ArqArquivo } = db.models

module.exports = async function (arquivoId) {

    // Obter arquivo e revisao
    let result = await ArqArquivo.aggregate([
        {
            $match: {
                _id: db.Types.ObjectId(arquivoId)
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

    let arquivo = result && result.length > 0 ? result[0] : null

    em.emit('arquivo-obtido', arquivo)

    return arquivo

}
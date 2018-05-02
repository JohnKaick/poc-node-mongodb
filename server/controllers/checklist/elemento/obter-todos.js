const _ = require('lodash')
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const {
    ChkElemento, ChkElementoAnomalia
} = db.models

module.exports = async function (grupoId) {

    let elementos = await ChkElemento.find({
        grupo: grupoId
    }).populate({
        path: 'modelo',
        populate: {
            path: 'disciplina'
        }
    })

    let anomalias = await ChkElementoAnomalia.find({
        grupo: grupoId
    })
        .populate('modelo')
        .populate('imagens')

    let result = elementos.map(elemento => {
        return {
            _id: elemento._id,
            grupo: elemento.grupo,
            modelo: elemento.modelo,
            nome: elemento.nome,
            descritivo: elemento.descritivo,
            tag: elemento.tag,
            situacao: elemento.situacao,
            imagens: elemento.imagens,
            anomalias: _
                .chain(anomalias)
                .filter(anomalia => {
                    return elemento.id === anomalia.elemento.toString()
                })
                .map(anomalia => {
                    return _.cloneDeep(anomalia)
                })
                .value()
        }
    })

    return result

}
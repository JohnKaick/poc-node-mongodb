const { normalize } = require('normalizr')

const _ = require('lodash')
const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const schemas = require('common/schemas')
const {
    ChkElemento, ChkElementoAnomalia
} = db.models

module.exports = async function (checklistId, query) {

    let anomalias = await ChkElementoAnomalia
        .find({ checklist: checklistId })
        .populate('modelo')
        .populate('grupo')
        .populate({
            path: 'elemento',
            populate: {
                path: 'modelo',
                populate: {
                    path: 'disciplina'
                }
            }
        })
        .limit(100)

    return normalize(anomalias.map(a => a.toObject()), [schemas.ElementoAnomaliaSchema])

}
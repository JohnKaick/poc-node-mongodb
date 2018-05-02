const normalizr = require('normalizr')
const Entity = normalizr.schema.Entity

const DisciplinaSchema = new Entity('chk-disciplina', {

}, { idAttribute: '_id' })

const ImagemSchema = new Entity('chk-imagem', {

}, { idAttribute: '_id' })

const MdElementoAnomaliaSchema = new Entity('chk-md-elemento-anomalia', {

}, { idAttribute: '_id' })

const GrupoSchema = new Entity('chk-grupo', {
    imagens: [ImagemSchema]
}, { idAttribute: '_id' })

const MdElementoSchema = new Entity('chk-md-elemento', {
    anomalias: [MdElementoAnomaliaSchema],
    disciplina: DisciplinaSchema
}, { idAttribute: '_id' })

const ElementoSchema = new Entity('chk-elemento', {
    modelo: MdElementoSchema
}, { idAttribute: '_id' })

const ElementoAnomaliaSchema = new Entity('chk-elemento-anomalia', {
    modelo: MdElementoAnomaliaSchema,
    grupo: GrupoSchema,
    elemento: ElementoSchema,
}, { idAttribute: '_id' })

module.exports.ElementoAnomaliaSchema = ElementoAnomaliaSchema
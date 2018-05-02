const eh = require('common/error-handler')
const em = require('common/emitter')
const db = require('database')
const { ChkDisciplina } = db.models

module.exports = async function (auth, disciplinaId, data) {

    // Editar disciplina
    let disciplina = await ChkDisciplina.findByIdAndUpdate(disciplinaId, {
        $set: {
            nome: data.nome,
            editadoPor: auth.usuarioId,
            editadoEm: new Date()
        }
    }, { new: true })

    em.emit('disciplina-editada', { disciplina })

    return disciplina

}


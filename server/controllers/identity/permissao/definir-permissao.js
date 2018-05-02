const _ = require('lodash')
const eh = require('common/error-handler')
const db = require('database')
const { IdeUsuario, IdePermissao, IdeProjeto } = db.models

/**
 * Verifica e atribui nível de acesso ao usuário com o escopo do projeto.
 * @param {*} solicitanteId - id do usuário que está fazendo a alteração
 * @param {*} email - email do usuário de escopo
 * @param {*} projetoId - a tribuição está relacionada a qual projeto?
 * @param {*} modulo - a tribuição está relacionada a qual módulo?
 * @param {*} alvo - dentro do módulo, atribui algum escopo de regra...
 * @param {*} valor - valor desse escopo de regra
 * @param {*} acesso - nível de acesso
 */
module.exports = async function (solicitanteId, email, projetoId, modulo, alvo, valor, acesso) {

    // Verifica se existe um usuário com este e-mail...
    let usuario = await IdeUsuario.findOne({ email })

    // Obtem dados do projeto, verificar se o usuario faz parte da empresa...
    let projeto = await IdeProjeto.findById(projetoId)

    // permissão
    let permissao = null

    // verifica se a permissão definida aprova ediçoes
    let editavel = acesso !== 'b' && acesso !== 'r'

    // se for um usuário cadastrado, e ele não fizer parte da empresa
    if (usuario && usuario.empresa !== projeto.empresa) {

        // já existe uma permissão atribuída para este usuário?
        permissao = await IdePermissao.findOne({
            usuario: usuario._id,
            projeto: projeto._id,
            modulo: modulo
        })

        // caso já tenha uma permissão atribuída, é necessário verificar o nível de acesso.
        if (permissao) {

            // verifica se existe o registro específico
            let especifico = _.find(permissao.especificos, { alvo, valor })

            // caso existe, e o acesso seja diferente, altera
            if (especifico && especifico.acesso !== acesso) {
                especifico.acesso = acesso
                await permissao.save()
            }
            // caso não existe, insere
            else {
                if (!permissao.especificos) {
                    permissao.especificos = []
                }
                permissao.especificos.push({
                    alvo: alvo,
                    valor: valor,
                    acesso: acesso
                })
                await permissao.save()
            }

        }

        // criar uma permissão com limitando a restrição caso exista.
        else {

            permissao = new IdePermissao({
                usuario: usuario._id,
                empresa: projeto.empresa,
                projeto: projeto._id,
                escopo: 'p',
                modulo: modulo,
                acesso: 'r',
                especificos: [{
                    alvo: alvo,
                    valor: valor,
                    acesso: acesso
                }],
                atribuidoPor: solicitanteId
            })

            await permissao.save()

        }

    }

    // TODO: se for um usuário cadastrado, e ele faz parte da empresa...
    else if (usuario && usuario.empresa !== projeto.empresa) {

    }

    // se não existir um usuário com este e-mail
    else {

        permissao = new IdePermissao({
            usuario: null,
            empresa: projeto.empresa._id,
            projeto: projeto._id,
            escopo: 'p',
            modulo: modulo,
            acesso: 'b',
            especificos: [{
                alvo: alvo,
                valor: valor,
                acesso: acesso
            }],
            preAutorizar: email,
            atribuidoPor: solicitanteId
        })

        await permissao.save()

    }

    return permissao

}
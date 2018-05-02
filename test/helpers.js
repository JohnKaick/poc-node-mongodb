require('dotenv').config({ path: 'test/.env' })
const server = require('./../server')
const db = require('./../server/database')

module.exports.reciclarBase = function () {
    return new Promise((resolve, reject) => {

        // quando a conexão abrir..
        db.connection.on('open', () => {

            let hasDb = false
            let admin = db.mongo.Admin(db.connection.db)

            // verificar quais bancos de dados existem...
            admin.listDatabases((err, result) => {

                // caso de algum erro..
                if (err) return reject(err)

                for (dbn of result.databases) {
                    // caso exista...
                    if (dbn.name === 'wisein-test') {
                        hasDb = true
                    }
                }

                // se existir o banco de dados..
                if (hasDb) {
                    // excluir!
                    db.connection.db.dropDatabase().then((d) => {
                        resolve()
                    }).catch(err => {
                        reject(err)
                    })
                } else {
                    resolve()
                }

            })
        })

    })
}

module.exports.getDb = function () {
    return db
}


module.exports.getServer = function () {
    return server
}

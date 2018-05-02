const util = require('util')
const path = require('path')
const fs = require('fs')

const mongoose = require('mongoose')
mongoose.Promise = Promise

const modelosDir = path.resolve(__dirname + '/models')
const modulos = fs.readdirSync(modelosDir)

modulos.forEach(modulo => {
    let modelos = fs.readdirSync(path.resolve(modelosDir, modulo))
    modelos.forEach(modelo => {
        let dir = path.resolve(modelosDir, modulo, modelo)
        require(dir)(mongoose, mongoose.Schema.Types)
    })
})

let uri = ''

if (process.env.MONGO_CLUSTER && process.env.MONGO_CLUSTER === "true") {
    uri = util.format('mongodb://%s:%s@%s,%s,%s/%s?%s',
        process.env.MONGO_USER,
        process.env.MONGO_PASSWORD,
        process.env.MONGO_HOST1,
        process.env.MONGO_HOST2,
        process.env.MONGO_HOST3,
        process.env.MONGO_DB,
        process.env.MONGO_PARAMS)
} else {
    uri = process.env.MONGO_URI
}

mongoose.connect(uri, { useMongoClient: true })

module.exports = mongoose
const { makeExecutableSchema } = require('graphql-tools')
const { IdeProjeto } = require('./../database').models

const typeDefs = [
    require('./ide-projeto'), `
    type Query {
        projetos: [IdeProjeto]
        projeto(id: String!): IdeProjeto
    }
`];

const resolvers = {
    Query: {
        projetos() {
            return IdeProjeto.find().sort({ exibicao: 1 })
        },
        projeto(_, { id }) {
            return IdeProjeto.findById(id)
        }
        /*
        getUserById(root, { id }) {
            return models.User.findById(id).then((response) => response);
        },
        getUserByEmail(root, { email }) {
            return models.User.findOne({ email }).then((response) => response);
        }
        */
    },
    /*
    Mutation: {
        
        createUser(root, args) {
            const user = new models.User(args);
            return user.save().then((response) => response);
        }
        
    }
    */
};

module.exports = makeExecutableSchema({
    typeDefs, resolvers
})
const { apolloHapi } = require('apollo-server');
const schema = require('./../graphql')

module.exports = [{
    register: apolloHapi,
    options: {
        path: '/graphql',
        route: {
            auth: false
        },
        apolloOptions: () => ({
            pretty: true,
            schema: schema,
        })
    }
},
{ register: require('vision') },
{ register: require('inert') },
{ register: require('lout') },
{ register: require('hapi-boom-decorators') },
{ register: require('hapi-auth-jwt2') }
]
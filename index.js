const hapi = require('hapi');
const db = require('./utils/db');
const { graphqlHapi, graphiqlHapi} = require('graphql-server-hapi');
const schema = require('./graphql/schema')

const Hello = require('./routes/Hello')
const Book = require('./routes/Book')


const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async () => {  
    await server.register({
        plugin: graphqlHapi,
        options: {
            path: '/graphql',
            graphqlOptions: {
                schema,
            },
            route: {
                cors: true,
            },
        },
    });
    
    await server.register({
        plugin: graphiqlHapi,
        options: {
            path: '/graphiql',
            route: {
                cors: true,
            },
            graphiqlOptions: {
                endpointURL: 'graphql',
            },
        },
    });
    
    server.route(
        Book
    )
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();   
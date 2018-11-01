const hapi = require('hapi');
const db = require('./utils/db');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const { graphqlHapi, graphiqlHapi} = require('graphql-server-hapi');
const schema = require('./graphql/schema')

const Hello = require('./routes/Hello')
const Book = require('./routes/Book')


const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async () => {  

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'API document of Mr Soi',
                    version: '1.0.0'
                }
            },
        }   
    ]);

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
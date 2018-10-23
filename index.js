const hapi = require('hapi');
const db = require('./utils/db');

const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async () => {  
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {
            return 'Hello Sói!';
        }
    })
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();   
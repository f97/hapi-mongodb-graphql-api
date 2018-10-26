const hapi = require('hapi');
const db = require('./utils/db');
const Hello = require('./routes/Hello')
const Book = require('./routes/Book')

const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async () => {  
    server.route(
        Hello,
        Book
    )
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();   
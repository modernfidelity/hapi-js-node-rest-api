/***
 *
 * API (main)
 *
 * @file The main application file for the REST API
 *
 * @see /docs for API documentation
 *
 * @type {exports|module.exports}
 *
 *
 */


var Hapi    = require('hapi'),
    Routes  = require('./routes'),
    Pack    = require('./package');


// SERVER
// ---------------------------------------------------
var server = new Hapi.Server();

server.connection({
    port: process.env.PORT || 3000
});

//server.bind({db: db});


server.route({
    method: 'GET',
    config: {auth: false},
    path: '/',
    handler: function (request, reply) {
        reply(Pack.version);
    }
});

server.route(Routes);

server.start(function () {
    console.log('Server listening at:', server.info.uri);
});
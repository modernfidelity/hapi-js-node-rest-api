/***
 *
 * ROUTES : User
 *
 * @type {exports|module.exports}
 */

var User = require('./user.handler.js');

module.exports = [


    {
        method: 'GET',
        config: {auth: false},
        path: '/users/hello',
        handler: function (request, reply) {
            reply("hello");
        }
    },


    {
        method: 'GET',
        path: '/users',
        handler: User.find
    },

    {
        method: 'GET',
        path: '/users/{id}',
        handler: User.findOne
    },


    {
        method: 'POST',
        path: '/users',
        //config: {
        //    auth: 'api',
        //    payload: {
        //        output: 'data'
        //    }
        //},
        handler: User.create
    }];
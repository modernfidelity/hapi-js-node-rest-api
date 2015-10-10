/***
 *
 * ROUTES : Bookmark
 *
 * @type {exports|module.exports}
 */

var Bookmark = require('./bookmark.handler.js');

module.exports = [


    {
        method: 'GET',
        config: {auth: false},
        path: '/bookmarks/hello',
        handler: function (request, reply) {
            reply("hello");
        }
    },


    {
        method: 'GET',
        path: '/bookmarks',
        handler: Bookmark.find
    },

    {
        method: 'GET',
        path: '/bookmarks/{id}',
        handler: Bookmark.findOne
    },


    {
        method: 'POST',
        path: '/bookmarks',
        //config: {
        //    auth: 'api',
        //    payload: {
        //        output: 'data'
        //    }
        //},
        handler: Bookmark.create
    }];
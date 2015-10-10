/***
 *
 * API ROUTES
 *
 * @file Provides a collection of all the routes used within the API.
 *
 */

var Bookmark = require('./components/bookmark/bookmark.route.js');
var User = require('./components/user/user.route.js');

module.exports = [].concat(

    Bookmark,
    User

);
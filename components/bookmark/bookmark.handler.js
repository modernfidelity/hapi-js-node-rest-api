/**
 *
 * HANDLER (controller) : Bookmark
 *
 * @param request
 * @param reply
 */

var db = require('../../datastores/mysql.js');

exports.find = function (request, reply) {

    var sql = 'SELECT * FROM bookmarks';
    var params = [];


    //db.all(sql, params, function (err, results) {
    //
    //    if (err) {
    //        throw err;
    //    }
    //
    //    reply(results);
    //});


    db.con.query('SELECT * FROM bookmarks', function (err, results) {
        if (err) throw err;

        console.log('Data received from Db:\n');

        reply(results);

    });


};

exports.findOne = function (request, reply) {

    this.db.get('SELECT * FROM recipes WHERE id = ?', [request.params.id], function (err, result) {

        if (err) {
            throw err;
        }

        if (typeof result !== 'undefined') {
            reply(result);
        } else {
            reply('Not found').code(404);
        }
    });
};

exports.create = function (request, reply) {

    var sql = 'INSERT INTO recipes (name, cooking_time, prep_time, serves, cuisine, ingredients, directions, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    this.db.run(sql,
        [
            request.payload.name,
            request.payload.cooking_time,
            request.payload.prep_time,
            request.payload.serves,
            request.payload.cuisine,
            request.payload.ingredients,
            request.payload.directions,
            request.auth.credentials.id,
        ],
        function (err) {

            if (err) {
                throw err;
            }

            reply({status: 'ok'});
        });
};
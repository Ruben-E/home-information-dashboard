var r = require('rethinkdb');
var connection = require('./database/connection');

connection.getConnection().then(function (conn) {
    r.table('authors').changes().run(conn, function (err, cursor) {
        if (err) throw err;
        cursor.each(function (err, row) {
            if (err) throw err;
            console.log(JSON.stringify(row, null, 2));
        });
    });
});
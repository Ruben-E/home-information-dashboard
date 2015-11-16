var r = require('rethinkdb');
var connection = require('./database/connection');

connection.getConnection().then(function (conn) {
    console.log('Connection is open');

    r.tableCreate('temperatures').run(conn, function (err, result) {
        if (err) throw err;

        console.log('Tables created...');
    });
});

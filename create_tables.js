var r = require('rethinkdb');
var Connection = require('./database/connection');

Connection.getConnection().then(function(conn) {
    console.log("Connection is open" + conn);

    r.db('test').tableCreate('temperature').run(conn, function(err, result) {
        if (err) throw err;
    });
});

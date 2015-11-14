var r = require('rethinkdbdash')();
var Connection = require('./database/connection');

Connection.getConnection().then(function(connection) {
    console.log("Connection is open");

    r.db('home-information').tableCreate('temperature').run(connection, function(err, result) {
        if (err) throw err;
    });
});
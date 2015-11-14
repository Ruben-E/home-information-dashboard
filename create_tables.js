var r = require('rethinkdbdash')();
var Connection = require('./database/connection');

var connection = Connection.getConnection();
r.db('home-information').tableCreate('temperature').run(connection, function(err, result) {
    if (err) throw err;
});
var r = require('rethinkdb');
var config = require('./../config');

module.exports = {
    getConnection: function () {
        return r.connect({host: config.rethinkdb.host, port: 28015, db: config.rethinkdb.database});
    }
};

var r = require('rethinkdbdash')();

var connection = null;

module.exports = {
    getConnection: function() {
        if (!connection) {
            r.connect({host: 'localhost', port: 28015}, function (err, conn) {
                if (err) throw err;
                connection = conn;
            })
        }

        return connection;
    }
};
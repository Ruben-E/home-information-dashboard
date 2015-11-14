var r = require('rethinkdbdash')();

module.exports = function () {
    var self = this;
    var connection = null;


    self.getConnection = function () {
        if (!connection) {
            r.connect({host: 'localhost', port: 28015}, function (err, conn) {
                if (err) throw err;
                connection = conn;
            })
        }

        return connection;
    };
};
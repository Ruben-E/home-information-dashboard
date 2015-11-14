var r = require('rethinkdb');

module.exports = {
    getConnection: function () {
        return r.connect({host: 'localhost', port: 28015, db: 'test'});
    }
};

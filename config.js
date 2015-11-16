nconf = require('nconf');

nconf.argv()
    .env()
    .file({file: './config.json'});

var config = {};

config.rethinkdb = {};
config.rethinkdb.host = nconf.get('rethinkdb:host');
config.rethinkdb.port = nconf.get('rethinkdb:port');
config.rethinkdb.username = nconf.get('rethinkdb:username');
config.rethinkdb.password = nconf.get('rethinkdb:password');
config.rethinkdb.database = nconf.get('rethinkdb:database');

module.exports = config;
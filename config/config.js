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

config.keen = {};
config.keen.projectId = nconf.get("keen:projectId");
config.keen.writeKey = nconf.get("keen:writeKey");
config.keen.readKey = nconf.get("keen:readKey");
module.exports = config;
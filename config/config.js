nconf = require('nconf');

nconf.argv()
    .env()
    .file({file: './config.json'});

var config = {};
config.mqtt = {};
config.mqtt.host = nconf.get('mqtt:host');

module.exports = config;
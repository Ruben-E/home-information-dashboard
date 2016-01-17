var mqtt = require('mqtt');
var config = require('./../config/config');

module.exports = {
    getConnection: function () {
        return mqtt.connect(config.mqtt.host);
    }
};

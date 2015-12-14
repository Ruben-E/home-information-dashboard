var Keen = require('keen-js')
var config = require('./../config/config');

var client = new Keen({
    projectId: config.keen.projectId,
    writeKey: config.keen.writeKey,
    readKey: config.keen.readKey
});

module.exports = {
    getClient: function () {
        return client;
    }
};

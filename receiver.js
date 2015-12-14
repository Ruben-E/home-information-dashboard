var radio = require('nrf').connect("/dev/spidev0.0", 22);
var r = require('rethinkdb');
var connection = require('./database/connection');
var keen = require('./keen/keen');

var matchRegex = /^\|(\d+\.?\d*)\|(\d+\.?\d*)\|$/;

radio
    .channel(0x4c)
    .dataRate('1Mbps')
    .crcBytes(2)
    .autoRetransmit({count: 15, delay: 4000});

connection.getConnection().then(function (conn) {
    radio.begin(function () {
        var rx = radio.openPipe('rx', 0xF0F0F0F0E1);
        radio.printDetails();

        rx.on('data', function (data) {
            Array.prototype.reverse.call(data);
            var dataString = data.toString();

            console.log("Got data");
            console.log(dataString);

            if (dataString && dataString.match(matchRegex)) {
                console.log('data matches the regular expression');

                var match = matchRegex.exec(dataString);

                var temperature = parseFloat(match[1]);
                var humidity = parseFloat(match[2]);

                keen.getClient().addEvent('temperatures', {
                        temperature: temperature,
                        humidity: humidity
                    }, function (err, result) {
                        if (err) throw err;
                    }
                );

                r.table('temperatures').insert({
                    temperature: temperature,
                    humidity: humidity,
                    time: new Date()
                }).run(conn, function (err, result) {
                    if (err) throw err;
                });
            }
        });
    });
});

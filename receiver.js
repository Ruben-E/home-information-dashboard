var radio = require('nrf').connect("/dev/spidev0.0", 22);
var r = require('rethinkdb');
var mqtt = require('mqtt');
var connection = require('./mqtt/connection');
var client = connection.getConnection();

radio
    .channel(0x4c)
    .dataRate('1Mbps')
    .crcBytes(2)
    .autoRetransmit({count: 15, delay: 4000});

client.on('connect', function () {
    console.log("Connected to MQTT");

    radio.begin(function () {
        var rx = radio.openPipe('rx', 0xF0F0F0F0E1);
        radio.printDetails();

        rx.on('data', function (data) {
            Array.prototype.reverse.call(data);
            var dataString = data.toString();

            console.log("Got data:");
            console.log(dataString);

            if (dataString) {
                client.publish("measurements", dataString);
            }
        });
    });
});

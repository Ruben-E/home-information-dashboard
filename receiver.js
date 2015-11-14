var radio = require('nrf').connect("/dev/spidev0.0", 22);

radio
    .channel(0x4c)
    .dataRate('1Mbps')
    .crcBytes(2)
    .autoRetransmit({count: 15, delay: 4000});

radio.begin(function () {
    var rx = radio.openPipe('rx', 0xF0F0F0F0E1);
    radio.printDetails();

    rx.on('data', function (d) {
        Array.prototype.reverse.call(d);
        console.log("Got data");
        console.log(d.toString());
    });
});

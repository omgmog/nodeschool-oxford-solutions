var net = require('net');

var pad = function (number) {
    return ('0' + number).slice(-2);
}
var server = net.createServer();
server.on('connection', function (socket) {
    var d = new Date();
    var ds = [
        d.getFullYear(),
        pad(d.getMonth() + 1),
        pad(d.getDate())
        ].join('-');
    var ts = [
        pad(d.getHours()),
        pad(d.getMinutes())
    ].join(':');

    if (socket) {
        socket.end(ds + ' ' + ts + '\n');
    }
});
server.listen(process.argv[2]);

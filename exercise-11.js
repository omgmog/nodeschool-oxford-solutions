var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});

    var file = fs.readFile(process.argv[3], function (err, data) {
        response.end(data.toString());
    });
});

server.listen(process.argv[2]);

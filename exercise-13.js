var http = require('http');
var url = require('url');

var new_time = {};

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "application/json"});
    if (request.method === 'GET') {
        var req_url = url.parse(request.url, true);
        var time = new Date(req_url.query.iso);

        if (req_url.pathname == '/api/parsetime') {
            new_time = JSON.stringify({
                'hour': time.getHours(),
                'minute': time.getMinutes(),
                'second': time.getSeconds()
            });
        }
        if(req_url.pathname == '/api/unixtime') {
            new_time = JSON.stringify({
                'unixtime': time.getTime()
            });
        }
    }
    response.end(new_time, 'utf8');
});

server.listen(process.argv[2]);

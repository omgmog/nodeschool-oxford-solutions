var http = require('http');
var url = require('url');

var new_time = {};

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    if (request.method === 'GET') {

        var req_url = url.parse(request.url, true);

        if (req_url.pathname == '/api/parsetime') {
            if (req_url.query.iso) {
                var time = new Date(req_url.query.iso);

                new_time = {
                    'hour': time.getHours(),
                    'minute': time.getMinutes(),
                    'second': time.getSeconds()
                }
            }
        }
        if(req_url.pathname == '/api/unixtime') {
            if(req_url.query.iso) {
                var time = new Date(req_url.query.iso);

                new_time = {
                    'unixtime': time.getTime()
                }
            }
        }
    }
    new_time = JSON.stringify(new_time);

    response.end(new_time, 'utf8');
});

server.listen(process.argv[2]);

var http = require('http');
var os = require('os');
var util = require('util');

http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('0.1 version, hostname: ' + os.hostname() + '\n');
    response.write('from: ' + request.connection.remoteAddress + '\n');
    response.write('headers:' + '\n');
    response.end(util.inspect(request.headers));
}).listen(6969)

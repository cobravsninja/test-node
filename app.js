var http = require('http');
var os = require('os');
var util = require('util');
var count = 0;    

http.createServer(function(request, response) {
    if(count >= 3) {                                                                                                                                                          
        response.writeHead(500, { "Content-Type": "text/plain" });                                                                                                            
        response.end('fake error');                                                                                                                                           
        count = 0;                                                                                                                                                            
        return;                                                                                                                                                               
    }
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('0.2 version (broken), hostname: ' + os.hostname() + '\n');
    response.write('from: ' + request.connection.remoteAddress + '\n');
    response.write('headers:' + '\n');
    response.end(util.inspect(request.headers));
    count++;
}).listen(6969)

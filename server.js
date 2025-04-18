var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end('Hello World');
}).listen(3000);

console.log('Sever running at http://localhost:3000');
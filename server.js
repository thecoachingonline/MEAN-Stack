var express = require('express');
var app = express();
var helloWorld = function(req, res, next) {
    res.setHeader('content-type', 'text/plain');
    res.end('Hello World');
};

app.use('/', helloWorld);

app.listen(3000);
console.log('Sever running at http://localhost:3000');

module.express = app;
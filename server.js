process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./bin/www');

module.exports = express;
console.log('Sever running at http://localhost:3000');
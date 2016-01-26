// We require express and set it to a usable variable
var express = require('express');
var logger = require('morgan');
// We call express and set it equal to a usable variable
var app = express();

app.use(logger('dev'));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(8080);

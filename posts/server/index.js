var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send(200, 'Hello World');
});

app.get('/test', function(req, res) {
  res.send(200, { name: 'test', info: 'test info'});
});

app.listen(8890);
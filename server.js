var express = require('express');
var config  = require('npm-config');
var path    = require('path');
var PORT    = 3000;


var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/:file', function(req, res){
  var file = req.params.file;
  res.sendFile(__dirname + '/public/' + file + '.html');
});

app.listen(PORT);
console.log('Ouistart listening on port', PORT);

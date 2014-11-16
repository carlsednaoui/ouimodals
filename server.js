var express = require('express');
var path    = require('path');
var PORT    = 3000;


var app = express();
app.use(express.static(__dirname + '/examples'));

app.get('/:file', function(req, res){
  var file = req.params.file;
  res.sendFile(__dirname + '/examples/' + file + '.html');
});

app.listen(PORT);
console.log('Ouimodals listening on port', PORT);

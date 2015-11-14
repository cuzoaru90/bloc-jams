var express = require('express');
var app     = express();
var path    = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + "/"));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/collection.html',function(req,res){
  res.sendFile(path.join(__dirname+'/collection.html'));
});

app.get('/album.html',function(req,res){
  res.sendFile(path.join(__dirname+'/album.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

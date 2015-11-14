var express = require('express');
var app     = express();
var path    = require('path');

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

app.listen(3000);

console.log("Running at Port 3000");
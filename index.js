var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static(__dirname + '/scripts/landing.js'));
app.use(express.static(__dirname + '/styles/landing.css'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/collection.html',function(req,res){
  res.sendFile(path.join(__dirname+'/collection.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/album.html',function(req,res){
  res.sendFile(path.join(__dirname+'/album.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000);

console.log("Running at Port 3000");
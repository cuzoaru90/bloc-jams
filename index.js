var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  /*var result = ''
  var times = process.env.TIMES || 3
  for (i=0; i < times; i++)
    result += "homepage string ";
  response.send(result);*/
  
  // Render index html
    
});

app.get('/collection', function(request, response) {
  // Render collection html
});

app.get('/album', function(request, response) {
  // Render album html
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

'use strict';
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api', function(req, res){
  res.send('hello from api');
});

app.use('/', function(req, res){
  res.status(404);
  res.statusMessage = 'Page not found';
  res.send('404 not found');
});

app.listen(8000, function(){
  console.log('Listening on port 8000');
});

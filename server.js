'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/english', function(req, res){
  res.header("Content-Type", "text/plain; charset=utf-16");
  res.send('hello world');
});

app.get('/japanese', function(req, res){
  res.header("Content-Type", "text/plain; charset=utf-16");
  res.send('こんにちは世');
});

app.use('/', function(req, res){
  res.status(404);
  res.statusMessage = 'Page not found';
  res.send('404 not found');
});

app.listen(port, function(){
  console.log('Listening on port 8000');
});

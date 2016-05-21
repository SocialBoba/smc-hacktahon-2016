"use strict";

var express = require('express');
var port = process.env.PORT || 3000;

var api_router = require('./routes/api-router')
var serve_static = express.static(__dirname + "/../public");

var app = express();
app.use('/api/v1', api_router);
app.use('/', serve_static);

// 404 Handling
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.sendFile(__dirname + '/static/404.html');
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
});

app.listen(port);

console.log("listening on " + port);

"use strict"
var express = require('express');
var api_router = express.Router();

api_router.use(require('body-parser').json());

// Routes
api_router.use('/mentors', require('./mentor-router'));
api_router.use('/youths', require('./youth-router'));

api_router.get("/hello", function(req, res) {
  res.send("hello!");
});

module.exports = api_router;

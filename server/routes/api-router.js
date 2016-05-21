"use strict"
var express = require('express');
var api_router = express.Router();

// Routes
// api_router.use('/mentor', require('mentor-routes.js'));

api_router.get("/hello", function(req, res) {
  res.send("hello!");
});

module.exports = api_router;

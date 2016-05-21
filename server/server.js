"use strict";
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
 

app.use(express.static(__dirname + "/../public"));

app.listen(port);

console.log("listening on " + port);


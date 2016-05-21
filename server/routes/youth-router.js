"use strict"
var _ = require('lodash');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var models = require('../models');

var express = require('express');
var youth_router = express.Router();

youth_router.get("/", function(req, res) {
  models.Youth.findAll().then(function(youths) {
    var result = _.map(youths, YouthSummary);
    res.send(result);
  });
});

youth_router.get("/:id", function(req, res) {
  models.Youth.findById(req.params.id).then(function(youth) {
    res.send(Youth(youth));
  });
});

youth_router.post("/", function(req, res) {
  var data = req.body;

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(data.password, salt);

  data.password_hashed = hash;
  models.Youth.create(data).then(function(youth) {
    res.send(YouthSummary(youth));
  });
});

var jwt_secret = require(__dirname + '/../config/secrets.json').jwt_secret;

youth_router.post("/login", function(req, res) {
  var data = req.body;
  models.Youth.findOne({ where: {email: data.email} }).then(function(youth) {
    if (youth) {
      if (bcrypt.compareSync(data.password, youth.password_hashed)) {
          var token = jwt.sign({
            type: 'youth',
            id: youth.id,
            sub: 'auth-login'
          }, jwt_secret);

          res.send({
            id: youth.id,
            token: token,
            result: {
              status: 'success',
              message: ''
            }
          });

          return ;
      }
    }

    res.status(403).send({
      message: "Wrong email/password",
      code: "auth-failure"
    });

    return ;
  });
});

var YouthSummary = function(youth) {
  return {
    youth_id: youth.id,
    name: youth.name,
    location: {
      city: youth.city,
      state: youth.state,
      postal: youth.postal,
    },
    social_links: {
      linkedin_url: youth.linkedin_url,
      youtube_url: youth.youtube_url,
    },
  }
};

var Youth = function(youth) {
  return {
    youth_id: youth.id,
    name: youth.name,
    location: {
      city: youth.city,
      state: youth.state,
      postal: youth.postal,
    },
    social_links: {
      linkedin_url: youth.linkedin_url,
      youtube_url: youth.youtube_url,
    },
    intro: youth.intro,
    org: youth.org,
    profile_pic_url: youth.profile_pic_url
  }
};

module.exports = youth_router;

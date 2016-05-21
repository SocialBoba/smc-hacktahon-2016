"use strict"
var _ = require('lodash');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var models = require('../models');

var express = require('express');
var mentor_router = express.Router();

mentor_router.get("/", function(req, res) {
  models.Mentor.findAll().then(function(mentors) {
    var result = _.map(mentors, MentorSummary);
    res.send(result);
  });
});

mentor_router.get("/:id", function(req, res) {
  models.Mentor.findById(req.params.id).then(function(mentor) {
    res.send(Mentor(mentor));
  });
});

mentor_router.post("/", function(req, res) {
  var data = req.body;

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(data.password, salt);

  data.password_hashed = hash;
  models.Mentor.create(data).then(function(mentor) {
    var token = jwt.sign({
      type: 'mentor',
      id: mentor.id,
      sub: 'auth-login'
    }, jwt_secret);

    res.send({
      summary: MentorSummary(mentor),
      token: token
    });
  });
});

var jwt_secret = require(__dirname + '/../config/secrets.json').jwt_secret;

mentor_router.post("/login", function(req, res) {
  var data = req.body;
  models.Mentor.findOne({ where: {email: data.email} }).then(function(mentor) {
    if (mentor) {
      if (bcrypt.compareSync(data.password, mentor.password_hashed)) {
          var token = jwt.sign({
            type: 'mentor',
            id: mentor.id,
            sub: 'auth-login'
          }, jwt_secret);

          res.send({
            id: mentor.id,
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

var MentorSummary = function(mentor) {
  return {
    mentor_id: mentor.id,
    name: mentor.name,
    location: {
      city: mentor.city,
      state: mentor.state,
      postal: mentor.postal,
    },
    social_links: {
      linkedin_url: mentor.linkedin_url,
      youtube_url: mentor.youtube_url,
    },
  }
};

var Mentor = function(mentor) {
  return {
    mentor_id: mentor.id,
    name: mentor.name,
    location: {
      city: mentor.city,
      state: mentor.state,
      postal: mentor.postal,
    },
    social_links: {
      linkedin_url: mentor.linkedin_url,
      youtube_url: mentor.youtube_url,
    },
    intro: mentor.intro,
    org: mentor.org,
    profile_pic_url: mentor.profile_pic_url
  }
};

module.exports = mentor_router;

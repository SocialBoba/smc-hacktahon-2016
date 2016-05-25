"use strict"
var _ = require('lodash');
var sjcl = require('sjcl');
var jwt = require('jsonwebtoken');

var models = require('../models');
var ApiError = require('../util/api-error');

var express = require('express');
var mentor_router = express.Router();

var secrets = require(__dirname + '/../config/secrets.json');
var pwd_secret = secrets.pwd_secret;
var jwt_secret = secrets.jwt_secret;

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

  var encrypted = sjcl.encrypt(pwd_secret, data.password);
  data.password_hashed = encrypted;

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

mentor_router.post("/login", function(req, res) {
  var data = req.body;
  models.Mentor.findOne({ where: {email: data.email} }).then(function(mentor) {
    if (mentor) {
      if (data.password === sjcl.decrypt(pwd_secret, mentor.password_hashed)) {
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

    res.status(403).send(
      ApiError.AuthorizationError("Wrong email/password", "auth-failure")
    );

    return ;
  });
});

mentor_router.get("/:id/mentee", function(req, res) {
  var sent = false;

  var token = req.get("Authorization");
  if (token) token = token.split("Bearer ")[1];

  if (token) {
    try {
      var decoded = jwt.verify(token, jwt_secret);
      if (decoded) {
        if (decoded.type == 'mentor' && decoded.id == req.params.id) {
          models.Mentor.findById(req.params.id).then(function(mentor) {
            var mentee = mentor.getMentee().then(function(m) {
              var result = _.map(m, YouthSummary);
              res.send(result);
              sent = true;
              return ;
            });
          });
        }
      }
    } catch(err) {
      res.status(403).send(
        ApiError.AuthorizationError("Wrong token or expired", "auth-failure")
      );

      return ;
    }
  } else {
    res.status(403).send(
      ApiError.AuthorizationError("Access denied. No token supplied.", "auth-failure")
    );
  }

  return ;
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

module.exports = mentor_router;

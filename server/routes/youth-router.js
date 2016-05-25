"use strict"
var _ = require('lodash');
var sjcl = require('sjcl');
var jwt = require('jsonwebtoken');

var models = require('../models');
var ApiError = require('../util/api-error');

var express = require('express');
var youth_router = express.Router();

var secrets = require(__dirname + '/../config/secrets.json');
var pwd_secret = secrets.pwd_secret;
var jwt_secret = secrets.jwt_secret;

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

  var encrypted = sjcl.encrypt(pwd_secret, data.password);
  data.password_hashed = encrypted;

  models.Youth.create(data).then(function(youth) {
    var token = jwt.sign({
      type: 'youth',
      id: youth.id,
      sub: 'auth-login'
    }, jwt_secret);

    res.send({
      summary: YouthSummary(youth),
      token: token
    });
  });
});

youth_router.post("/login", function(req, res) {
  var data = req.body;
  models.Youth.findOne({ where: {email: data.email} }).then(function(youth) {
    if (youth) {
      if (data.password === sjcl.decrypt(pwd_secret, youth.password_hashed)) {
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

    res.status(403).send(
      ApiError.AuthorizationError("Wrong email/password", "auth-failure")
    );

    return ;
  });
});

youth_router.get("/:id/mentors", function(req, res) {
  var sent = false;

  var token = req.get("Authorization");
  if (token) token = token.split("Bearer ")[1];

  if (token) {
    try {
      var decoded = jwt.verify(token, jwt_secret);
      if (decoded) {
        if (decoded.type == 'youth' && decoded.id == req.params.id) {
          models.Youth.findById(req.params.id).then(function(youth) {
            var mentor = youth.getMentor().then(function(m) {
              var result = _.map(m, MentorSummary);
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

module.exports = youth_router;

"use strict"
var _ = require('lodash');

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
  var body = req.body;
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

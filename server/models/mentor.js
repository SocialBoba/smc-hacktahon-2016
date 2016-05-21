'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mentor = sequelize.define('Mentor', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postal: DataTypes.INTEGER,
    linkedin_url: DataTypes.TEXT,
    youtube_url: DataTypes.TEXT,
    intro: DataTypes.TEXT,
    org: DataTypes.STRING,
    profile_pic_url: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Mentor;
};

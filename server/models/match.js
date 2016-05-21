'use strict';
module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define('Match', {
    mentor_id: {
      type: DataTypes.INTEGER,
      unique: "match_mentor_youth"
    },
    match_type: {
      type: DataTypes.STRING
    },
    youth_id: {
      type: DataTypes.INTEGER,
      unique: "match_mentor_youth"
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Match;
};

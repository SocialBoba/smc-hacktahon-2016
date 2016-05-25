'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mentor = sequelize.define('Mentor', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hashed: DataTypes.STRING,
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
        Mentor.belongsToMany(models.Youth, {
          through: {
            model: models.Match,
            unique: false,
            scope: {
              match_type: 'm'
            }
          },
          as: 'mentee',
          foreignKey: 'mentor_id'
        });
      }
    }
  });
  return Mentor;
};

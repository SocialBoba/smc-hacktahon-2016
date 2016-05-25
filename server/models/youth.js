'use strict';
module.exports = function(sequelize, DataTypes) {
  var Youth = sequelize.define('Youth', {
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
        Youth.belongsToMany(models.Mentor,{
          through: {
            model: models.Match,
            unique: false
          },
          foreignKey: 'youth_id'
        });

      }
    }
  });
  return Youth;
};

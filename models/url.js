'use strict';
module.exports = function(sequelize, DataTypes) {
  var url = sequelize.define('url', {
    url: DataTypes.TEXT,
    hash: DataTypes.STRING,
    clicks: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return url;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var url = sequelize.define('url', {
    url: DataTypes.STRING,
    hash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return url;
};
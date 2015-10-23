'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
  'urls',
  'clicks',
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
);
  },

  down: function (queryInterface, Sequelize) {
     queryInterface.removeColumn(
  'urls',
  'clicks'
);
  }
};

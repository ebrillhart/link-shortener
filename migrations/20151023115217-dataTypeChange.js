'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn( 'urls', 'url', { type: Sequelize.TEXT, allowNull: false} );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn( 'urls', 'url', { type: Sequelize.STRING, allowNull: false} );
  }
};

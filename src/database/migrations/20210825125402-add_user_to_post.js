'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("posts, user_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        kay: "id"
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("posts", "user_id");
  }
};

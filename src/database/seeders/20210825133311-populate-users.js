'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('users', [{
      name: 'John ',
      email: "john@gmail.com",
      password : "123456",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

'use strict';
let fake = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let dummy=[];
    for (let i = 0; i < 15; i++){
      dummy.push({
        category_name: fake.random.word(8),
        created_at: new Date(),
        updated_at: new Date()
      });
    }
   return queryInterface.bulkInsert('categories', dummy, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

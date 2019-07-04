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
   for (let i = 0; i < 100000; i++){
     dummy.push({
       title: fake.random.words(8),
       content: fake.random.words(15),
       category_id: fake.random.number({min:21,max:50}),
       created_at: new Date(),
       updated_at: new Date()
     });
   }
   return queryInterface.bulkInsert('notes', dummy, {});
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

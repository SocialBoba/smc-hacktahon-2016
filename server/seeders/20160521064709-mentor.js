'use strict';
var moment = require("moment");
var timestamp = moment(Date.now()).tz("America/Los_Angeles").format();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Mentors', [
      {
        name: 'Matthew E. McKim',
        email: 'MatthewEMcKim@ggmail.io',
        city: 'San Mateo',
        state: 'CA',
        postal: 94401,
        intro: 'Hi',
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        name: 'Patrick W. Wilson',
        email: 'PatrickWWilson@ggmail.io',
        city: 'San Mateo',
        state: 'CA',
        postal: 94402,
        intro: 'Yolo',
        createdAt: timestamp, updatedAt: timestamp
      },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
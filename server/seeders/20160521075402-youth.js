'use strict';
var moment = require("moment");
var timestamp = moment(Date.now()).tz("America/Los_Angeles").format();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Youths', [
      {
        name: 'Patricia Leeper',
        email: 'PatriciaWLeeper@ggmail.io',
        city: 'San Mateo',
        state: 'CA',
        postal: 94401,
        intro: 'Newbie',
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        name: 'Melissa M. Lurie',
        email: 'MelissaMLurie@ggmail.io',
        city: 'San Mateo',
        state: 'CA',
        postal: 94402,
        intro: 'Live for now',
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        name: 'James L. Phillips',
        email: 'JameLPhillips@ggmail.io',
        city: 'San Mateo',
        state: 'CA',
        postal: 94403,
        intro: 'Strong and going',
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

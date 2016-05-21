'use strict';
var moment = require("moment");
var timestamp = moment(Date.now()).tz("America/Los_Angeles").format();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Matches', [
      {
        mentor_id: 1,
        match_type: "t",
        youth_id: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        mentor_id: 2,
        match_type: "m",
        youth_id: 3,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        mentor_id: 2,
        match_type: "t",
        youth_id: 1,
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

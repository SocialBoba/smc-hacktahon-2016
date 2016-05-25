'use strict';
var moment = require("moment");
var timestamp = moment(Date.now()).tz("America/Los_Angeles").format();

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Mentors', [
      {
        name: 'Matthew E. McKim',
        email: 'mm@aa.com',
        password_hashed: '{"iv":"cwYvYAHILD5//FNTLVoElQ==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"gXj35/tPI+Q=","ct":"H91/YsrpVBI70IjkddVc"}',
        // password: test123
        city: 'San Mateo',
        state: 'CA',
        postal: 94401,
        intro: 'Hi',
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        name: 'Patrick W. Wilson',
        email: 'pw@aa.com',
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

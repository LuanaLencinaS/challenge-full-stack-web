'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
        {
          name:'Luana Admin',
          email:'luhadmin@test.com',
          password:'$2b$10$SkYjrDwCFYu/v/ev/K2cnOFyJjTMafd/Ur.p4feaj/vmma7TAa/Jy',
        }
      ], {})
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}

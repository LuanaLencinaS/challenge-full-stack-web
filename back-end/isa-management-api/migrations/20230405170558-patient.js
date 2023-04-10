'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('patients', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      id_user: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      register_number:{
        type:Sequelize.STRING(120),
        allowNull:false
      },
      gender:{
        type:Sequelize.STRING(1),
        allowNull:false
      },
      birthdate:{
        type:Sequelize.DATEONLY,
        allowNull:false
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('patients');
  }
};

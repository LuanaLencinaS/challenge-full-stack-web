'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      type_user: {
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
      },
      name:{
        type:Sequelize.STRING(120),
        allowNull:false
      },
      email:{
        type:Sequelize.STRING(120),
        allowNull:false
      },
      password:{
        type:Sequelize.STRING(255),
        allowNull:false
      },
      status_active:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

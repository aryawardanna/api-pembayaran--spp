'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user: {
        type: Sequelize.INTEGER,
      },
      student: {
        type: Sequelize.INTEGER,
      },
      tgl_payment: {
        type: Sequelize.DATE,
      },
      month_payment: {
        type: Sequelize.STRING,
      },
      year_payment: {
        type: Sequelize.STRING,
      },
      spp: {
        type: Sequelize.INTEGER,
      },
      total_payment: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  },
};

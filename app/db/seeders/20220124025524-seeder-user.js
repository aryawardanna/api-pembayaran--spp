'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = bcrypt.hashSync('rahasia', 10);
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          password: password,
          name: 'admin test',
          level: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'admin2',
          password: password,
          name: 'admin test2',
          level: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

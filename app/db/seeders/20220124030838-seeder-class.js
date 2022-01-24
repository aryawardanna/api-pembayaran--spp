'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Classes',
      [
        {
          name_class: 'XII',
          kompetensi_keahlian: 'TKJ 1',
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_class: 'XII',
          kompetensi_keahlian: 'TKJ 2',
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_class: 'XII',
          kompetensi_keahlian: 'TKJ 3',
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Classes', null, {});
  },
};

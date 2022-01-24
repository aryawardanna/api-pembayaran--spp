'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Students',
      [
        {
          nis: '3664236',
          name: 'Arya',
          user: 1,
          class: 12,
          address: 'Karangsem',
          no_telp: '084567889272',
          spp: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nis: '3664237',
          name: 'Lia Wardani',
          user: 1,
          class: 12,
          address: 'Karangasem',
          no_telp: '084567889201',
          spp: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nis: '3664238',
          name: 'Putri Saputri',
          user: 1,
          class: 12,
          address: 'Dps',
          no_telp: '084567889273',
          spp: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};

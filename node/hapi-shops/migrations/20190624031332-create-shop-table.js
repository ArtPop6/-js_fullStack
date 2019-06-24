'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'shops',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    },
  ),

  down: queryInterface => queryInterface.dropTable('shops'),
};
module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'shops',
    [
      {
        id: 1, name: '店铺1', thumb_url: '1.png', timestamps,
      },
      {
        id: 2, name: '店铺2', thumb_url: '2.png',timestamps,
      },
      {
        id: 3, name: '店铺3', thumb_url: '3.png',timestamps,
      },
      {
        id: 4, name: '店铺4', thumb_url: '4.png',timestamps,
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('shops', { id: { [Op.in]: [1, 2, 3, 4] } }, {});
  },
};


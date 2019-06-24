'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'goods',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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

  down: queryInterface => queryInterface.dropTable('goods'),
};
const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'goods',
    [
      {
        id: 1, name: '商品1-1', shop_id: 1, thumb_url: '1.png',timestamps,
      },
      {
        id: 2, name: '商品1-2', shop_id: 1, thumb_url: '2.png',timestamps,
      },
      {
        id: 3, name: '商品1-3', shop_id: 1, thumb_url: '3.png',timestamps,
      },
      {
        id: 4, name: '商品2-1', shop_id: 2, thumb_url: '4.png',timestamps,
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('goods', { id: { [Op.in]: [1, 2, 3, 4] } }, {});
  },
};

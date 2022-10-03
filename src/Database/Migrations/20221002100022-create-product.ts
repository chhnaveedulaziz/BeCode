import { QueryInterface } from 'sequelize';
import Sequelize from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      isAvailable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("products");
  },
};

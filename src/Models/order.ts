import { Sequelize, DataTypes } from 'sequelize';

export interface OrderAttributes {
  productId: number;
}

export interface OrderInstance {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
}

module.exports = (sequelize: Sequelize) => {
  const Order = sequelize.define('order', {
    productId: DataTypes.INTEGER,
  });

  return Order;
};

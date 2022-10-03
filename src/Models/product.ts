import { Sequelize, DataTypes } from 'sequelize';

export interface ProductAttributes {
  name?: string;
  price?: number;
  isAvailable: boolean;
}

export interface ProductInstance {
  id: number;
  price: number;
  name: string;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    isAvailable: DataTypes.BOOLEAN
  });

  return Product;
};

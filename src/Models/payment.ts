import { Sequelize, DataTypes } from 'sequelize';

export interface PaymentAttributes {
  orderId?: number;
  amount?: number;
  status?: string;
}

export interface PaymentInstance {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  orderId: number;
  amount: number;
  status: string;
}

module.exports = (sequelize: Sequelize) => {
  const Payment = sequelize.define('payment', {
    orderId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    status: DataTypes.STRING
  });

  return Payment;
};

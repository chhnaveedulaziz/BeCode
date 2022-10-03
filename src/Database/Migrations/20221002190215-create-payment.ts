import {
    QueryInterface,
} from 'sequelize';
import Sequelize from 'sequelize';

export = {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.createTable('payments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            orderId: {
                type: Sequelize.INTEGER
            },

            amount: {
                type: Sequelize.INTEGER
            },

            status: {
                type: Sequelize.STRING
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface: QueryInterface) => {
        return queryInterface.dropTable('payments');
    }
};

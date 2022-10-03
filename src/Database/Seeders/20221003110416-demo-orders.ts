"use strict";

import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert(
      "orders",
      [
        {
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkDelete("products", null, {});
  },
};

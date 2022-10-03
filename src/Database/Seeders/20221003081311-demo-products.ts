"use strict";

import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Audionic Headset 210",
          price: 50,
          isAvailable: true,
        },
        {
          name: "Audionic neckband 510",
          price: 60,
          isAvailable: true,
        },
        {
          name: "Audionic earband",
          price: 60,
          isAvailable: true,
        },
        {
          name: "Sony watch",
          price: 130,
          isAvailable: true,
        },
        {
          name: "Prime headphones",
          price: 130,
          isAvailable: true,
        },
        {
          name: "Glory handfree",
          price: 130,
          isAvailable: true,
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

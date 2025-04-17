'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [{
      "id": 1,
      "descProduct": "Crispy dill pickles that are perfect for snacking or sandwiches.",
      "productName": "Dill Pickle Chips",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "id": 2,
      "descProduct": "Nutty and chewy black rice, high in antioxidants.",
      "productName": "Organic Black Rice"
    }, {
      "id": 3,
      "descProduct": "A spicy glaze made with sriracha and honey, perfect for meats.",
      "productName": "Sriracha Honey Glaze"
    }, {
      "id": 4,
      "descProduct": "A healthy vegan cheese alternative packed with nutrients and flavor.",
      "productName": "Nutritional Yeast"
    }, {
      "id": 8,
      "descProduct": "A hearty salad with lentils, veggies, and curry dressing.",
      "productName": "Curried Lentil Salad"
  }]

  let manipulateData = data.map(el => {
    let tampData = {
      "descProduct": el.descProduct,
      "productName": el.productName,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }
    return tampData
  })

    await queryInterface.bulkInsert('Products', manipulateData, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};

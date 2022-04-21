'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('downloaded', [{
      product_id: 1,
      download: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      product_id: 2,
      download: false,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('downloaded', null, {})
  }
}

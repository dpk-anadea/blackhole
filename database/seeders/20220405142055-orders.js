'use strict'

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('orders', [
      {
        user_id: 1,
        product_id: 1,
        created_at: new Date()
      }
    ])
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('orders', null, {})
  }
}

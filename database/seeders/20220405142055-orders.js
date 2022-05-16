'use strict'

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('orders', [
      {
        user_id: 1,
        total_cost: 100,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('orders', null, {})
  }
}

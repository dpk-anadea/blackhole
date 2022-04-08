'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      first_name: 'Yana',
      last_name: 'Ivanova',
      email: 'Ivanova@gmail.com',
      phone: '12451221',
      password: 'secret',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
}

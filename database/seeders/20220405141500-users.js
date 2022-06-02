'use strict'

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        first_name: 'Yana',
        last_name: 'Ivanova',
        email: 'Ivanova@gmail.com',
        phone: '12451221',
        password: 'secret',
        reset_password_link: '7dcb7a4e-f320-4f24-b025-189f172d9c27',
        activation_link: null,
        activated: false,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {})
  }
}

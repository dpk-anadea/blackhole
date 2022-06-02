'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('users', 'reset_password_link', {
        type: Sequelize.STRING
      })
    ])
  },

  async down(queryInterface) {
    return Promise.all([
      queryInterface.removeColumn('users', 'reset_password_link')
    ])
  }
}

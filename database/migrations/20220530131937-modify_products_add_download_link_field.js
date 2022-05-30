'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('products', 'download_link', {
        type: Sequelize.STRING
      })
    ])
  },

  down(queryInterface) {
    return Promise.all([
      queryInterface.removeColumn('products', 'download_link')
    ])
  }
}

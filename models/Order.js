'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
  }
  Order.init({
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Order'
  })
  return Order
}

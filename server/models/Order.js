'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Order.init(
    {
      total_cost: DataTypes.INTEGER
    },
    {
      sequelize,
      tableName: 'orders',
      modelName: 'Order'
    }
  )

  return Order
}

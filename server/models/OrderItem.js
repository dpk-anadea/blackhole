'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.belongsTo(models.Order, {
        foreignKey: 'order_id'
      })
      OrderItem.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'product_id'
      })
    }
  }
  OrderItem.init(
    {
      cost: DataTypes.STRING,
      quantity: DataTypes.INTEGER
    },
    {
      sequelize,
      tableName: 'order_items',
      modelName: 'OrderItem'
    }
  )

  return OrderItem
}

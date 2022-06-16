'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.OrderItem, {
        as: 'orderItems',
        foreignKey: 'product_id'
      })
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
      cost: DataTypes.STRING,
      download_link: DataTypes.STRING
    },
    {
      sequelize,
      tableName: 'products',
      modelName: 'Product'
    }
  )
  return Product
}

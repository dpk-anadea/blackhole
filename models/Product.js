'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {}
  Product.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
      cost: DataTypes.STRING
    },
    {
      sequelize,
      tableName: 'products',
      modelName: 'Product'
    }
  )
  return Product
}

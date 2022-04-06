'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Downloaded extends Model {
  }
  Downloaded.init({
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    download: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Downloaded'
  })
  return Downloaded
}

'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
  }
  Token.init({
    user: DataTypes.INTEGER,
    refresh_token: DataTypes.STRING
  }, 
  {
    sequelize,
    tableName: 'tokens',
    modelName: 'Token',
  })
  return Token
}

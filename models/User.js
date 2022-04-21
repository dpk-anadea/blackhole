'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    activation_link: DataTypes.STRING,
    activated: DataTypes.BOOLEAN
  },
  {
    sequelize,
    tableName: 'users',
    modelName: 'User'
  })
  return User
}

'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(value) {
          const hash = bcrypt.hashSync(value, 3)
          this.setDataValue('password', hash)
        }
      },
      reset_password_link: DataTypes.STRING,
      activation_link: DataTypes.STRING,
      activated: DataTypes.BOOLEAN
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User'
    }
  )

  return User
}

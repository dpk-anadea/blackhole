const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // static init(connection) {
    //   super.init
    // }
    // static associate({ Post }) {
    //   this.hasMany(Post, { foreignKey: id })
    // }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'User',
  })
  return User
}

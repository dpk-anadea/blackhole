const factory = require('factory-girl').factory
const SequelizeAdapter = require('factory-girl').SequelizeAdapter
const bcrypt = require('bcrypt')
const { User } = require('../../models')

factory.setAdapter(new SequelizeAdapter())

const hashPassword = bcrypt.hash('123456', 3)

factory.define('user', User, {
  first_name: 'Itan',
  last_name: 'Pol',
  phone: '84312454',
  email: 'itan-pol@example.com',
  password: hashPassword
})

module.exports = factory

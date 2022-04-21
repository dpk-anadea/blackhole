const factory = require('factory-girl').factory
const SequelizeAdapter = require('factory-girl').SequelizeAdapter
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const { User } = require('../../app/models')

factory.setAdapter(new SequelizeAdapter())

const hashPassword = bcrypt.hash('123456', 3)
const activationLink = uuid.v4()

factory.define('user', User, {
  first_name: 'Itan',
  last_name: 'Pol',
  phone: '84312454',
  email: 'itan-pol@example.com',
  password: hashPassword,
  activated: false,
  activation_link: activationLink
})

module.exports = factory

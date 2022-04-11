const factory = require('factory-girl').factory
const SequelizeAdapter = require('factory-girl').SequelizeAdapter

const { User } = require('../../models')

factory.setAdapter(new SequelizeAdapter())
 
factory.define('user', User, {
  first_name: 'Itan',
  last_name: 'Pol',
  phone: '84312454',
  email: 'itan-pol@example.com',
  password: '123456'
})

module.exports = factory

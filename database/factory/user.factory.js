const factory = require('factory-girl').factory
const adapter = new factory.SequelizeAdapter();
const { User } = require('../models')

factory.setAdapter(adapter);
 
factory.define('user', User, {
  first_name: 'Itan',
  last_name: 'Pol',
  phone: '84312454',
  email: 'qwe@qwe.com',
  password: '123456'
})

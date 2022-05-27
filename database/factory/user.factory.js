const factory = require('factory-girl').factory
const SequelizeAdapter = require('factory-girl').SequelizeAdapter
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const { User } = require('@server/models')
const { faker } = require('@faker-js/faker')

factory.setAdapter(new SequelizeAdapter())

const user = {
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName()
}

const hashPassword = bcrypt.hash('123456', 3)
const activationLink = uuid.v4()

factory.define('user', User, {
  ...user,
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(user.first_name, user.last_name),
  password: hashPassword,
  activated: false,
  activation_link: activationLink
})

module.exports = factory

const factory = require('factory-girl').factory
const SequelizeAdapter = require('factory-girl').SequelizeAdapter
const { Product } = require('../../server/models')
const { faker } = require('@faker-js/faker')

factory.setAdapter(new SequelizeAdapter())

factory.define('product', Product, {
  name: faker.lorem.words(2),
  type: 'Plugins',
  description: faker.lorem.sentence(),
  cost: '100',
  download_link: faker.internet.url()
})

module.exports = factory

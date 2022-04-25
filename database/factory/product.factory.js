const factory = require('factory-girl').factory
const SequelizeAdapter = require('factory-girl').SequelizeAdapter
const { Product } = require('../../server/models')

factory.setAdapter(new SequelizeAdapter())

factory.define('product', Product, {
  name: 'Aurora - Instrument Plugin',
  type: 'Plugins',
  description:
    'Our goal was NO filler sounds - we only included sounds that we personally would want to use every day.',
  cost: '100'
})

module.exports = factory

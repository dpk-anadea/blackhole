const factory = require('factory-girl').factory
const SequelizeAdapter = require('factory-girl').SequelizeAdapter
const { Order, OrderItem } = require('../../server/models')
import userFactory from '@factory/user.factory'
import productFactory from '@factory/product.factory'

factory.setAdapter(new SequelizeAdapter())

factory.define('order', Order, async () => {
  return {
    user_id: userFactory.assoc('user', 'id'),
    total_cost: 400
  }
})

factory.define('order_item', OrderItem, async () => {
  return {
    order_id: factory.assoc('order', 'id'),
    product_id: productFactory.assoc('product', 'id'),
    cost: '100',
    quantity: 2
  }
})

module.exports = factory

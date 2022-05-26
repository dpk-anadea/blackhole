const factory = require('factory-girl').factory
const SequelizeAdapter = require('factory-girl').SequelizeAdapter
import userFactory from '@factory/user.factory'
import productFactory from '@factory/product.factory'
const { Order, OrderItem } = require('../../server/models')

factory.setAdapter(new SequelizeAdapter())

factory.define('order', Order, async () => {
  const user = await userFactory.create('user')
  return {
    user_id: user.id,
    total_cost: 100
  }
})

factory.define('order_item', OrderItem, async () => {
  const order = await factory.create('order')
  const product = await productFactory.create('product')
  return {
    order_id: order.id,
    product_id: product.id,
    cost: '100',
    quantity: 3
  }
})

module.exports = factory

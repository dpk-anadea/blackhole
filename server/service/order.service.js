const { OrderItem, Order } = require('../models')

class OrderService {
  async createOrder(user, products) {
    console.log(products)
    const totalCost = products.reduce(
      (prev, curr) => prev + curr.cost * curr.count,
      0
    )

    const order = await Order.create({
      user_id: user.id,
      total_cost: totalCost
    })

    const productData = products.map((product) => ({
      product_id: product.id,
      cost: product.cost,
      quantity: product.count,
      order_id: order.id
    }))

    const orderItem = await OrderItem.bulkCreate(productData)

    return { order, orderItem }
  }
}

module.exports = new OrderService()

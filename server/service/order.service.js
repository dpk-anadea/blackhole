const { OrderItem, Order } = require('../models')

class OrderService {
  async createOrder(userId, products, totalCost) {
    const order = await Order.create({
      user_id: userId,
      total_cost: totalCost
    })

    const productData = products.map((product) => ({
      product_id: product.id,
      cost: product.cost,
      quantity: product.quantity,
      order_id: order.id
    }))

    const orderItems = await OrderItem.bulkCreate(productData)

    return { order, orderItems }
  }

  async getOrders(userId) {
    let orders = await Order.findAll({
      where: { user_id: userId },
      include: [
        {
          model: OrderItem,
          as: 'orderItems'
        }
      ]
    })

    return orders
  }
}

module.exports = new OrderService()

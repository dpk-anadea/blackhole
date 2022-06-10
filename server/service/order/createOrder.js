const { OrderItem, Order } = require('../../models')

module.exports = async (userId, products, totalCost) => {
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

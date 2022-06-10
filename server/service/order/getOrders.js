const { OrderItem, Order, Product } = require('../../models')

module.exports = async (userId) => {
  let orders = await Order.findAll({
    where: { user_id: userId },
    include: [
      {
        model: OrderItem,
        as: 'orderItems',
        include: {
          model: Product,
          as: 'product'
        }
      }
    ]
  })

  return orders
}

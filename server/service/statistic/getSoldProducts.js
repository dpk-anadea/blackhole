const { OrderItem, Product } = require('../../models')
const Sequelize = require('sequelize')

module.exports = async () => {
  const soldProducts = await Product.count({
    group: ['Product.name', 'Product.cost', 'orderItems.product_id'],
    where: (Product.id = OrderItem.product_id),
    attributes: [
      [Sequelize.fn('SUM', Sequelize.col('quantity')), 'total_quantity']
    ],
    include: [
      {
        model: OrderItem,
        as: 'orderItems',
        required: true
      }
    ]
  })

  return soldProducts
}

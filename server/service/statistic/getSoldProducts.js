const { OrderItem, Product } = require('../../models')

module.exports = async () => {
  const soldProducts = await Product.count({
    group: ['Product.name', 'Product.cost', 'orderItems.product_id'],
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

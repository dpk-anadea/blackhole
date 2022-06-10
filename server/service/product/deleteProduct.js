const { Product } = require('../../models')

module.exports = async (id) => {
  const product = await Product.destroy({ where: { id: id } })
  return product
}

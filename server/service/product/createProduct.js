const { Product } = require('../../models')

module.exports = async (productData) => {
  const product = await Product.create(productData)
  return product
}

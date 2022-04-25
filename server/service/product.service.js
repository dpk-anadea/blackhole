const { Product } = require('../models')

class ProductService {
  async createProduct(productData) {
    const product = await Product.create(productData)

    return { product }
  }
  async deleteProduct(id) {
    const product = await Product.destroy({ where: { id: id } })
    return product
  }
}

module.exports = new ProductService()

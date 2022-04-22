const { Product } = require('../models')

class ProductsController {
  async getProduct(req, res, next) {
    try {
      const products = await Product.findAll()
      res.json(products)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new ProductsController()

const { Product } = require('../models')
const productService = require('../service/product.service')

class ProductsController {
  async getProduct(req, res, next) {
    try {
      const products = await Product.findAll()
      res.json(products)
    } catch (err) {
      next(err)
    }
  }
  async createProduct(req, res, next) {
    try {
      const product = req.body
      const productData = await productService.createProduct(product)

      res.json(productData)
    } catch (err) {
      next(err)
    }
  }
  async deleteProduct(req, res, next) {
    try {
      const id = req.params.id
      const productDetails = await productService.deleteProduct(id)
      res.status(200).json({
        status: true,
        data: productDetails
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new ProductsController()

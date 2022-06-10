const getProducts = require('../service/product/getProducts')
const createProduct = require('../service/product/createProduct')
const deleteProduct = require('../service/product/deleteProduct')

class ProductsController {
  async getProduct(req, res, next) {
    try {
      const products = await getProducts()

      res.json(products)
    } catch (err) {
      next(err)
    }
  }

  async createProduct(req, res, next) {
    try {
      const product = req.body
      const productData = await createProduct(product)

      res.json(productData)
    } catch (err) {
      next(err)
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const id = req.params.product_id
      const productDetails = await deleteProduct(id)
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

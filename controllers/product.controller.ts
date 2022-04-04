const { Product } = require('../models')

class ProductsController {
    async getProduct (req, res) {
        try {
            const products = await Product.findAll()
            res.json(products)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    }
}

module.exports = new ProductsController()
const { Router: Routes } = require('express')
const router = new Routes()

const productController = require('../../controllers/product.controller')

router.get('/products', productController.getProduct)
router.post('/products', productController.createProduct)
router.delete('/products/:product_id', productController.deleteProduct)

module.exports = router

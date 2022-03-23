const { Router } = require('express')
const router = new Router()
const productTypeController = require('../../controllers/product_type.controller')

router.post('/product-type', productTypeController.createProductType)

module.exports = router

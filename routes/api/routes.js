const { Router: Routes } = require('express')
const router = new Routes()

const productTypeController = require('../../controllers/product_type.controller')
const userController = require('../../controllers/user.controller')

router.post('/product-type', productTypeController.createProductType)

router.post('/create-user', userController.createUser)
router.get('/users', userController.getUser)

module.exports = router

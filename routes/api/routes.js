const { Router: Routes } = require('express')
const router = new Routes()

const userController = require('../../controllers/user.controller')
const authController = require('../../controllers/auth.controller')
const productController = require('../../controllers/product.controller')

router.post('/users', userController.createUser)
router.get('/users', userController.getUser)

router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/refresh', authController.refresh)

router.get('/products', productController.getProduct)

module.exports = router

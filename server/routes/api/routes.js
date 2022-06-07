const { Router: Routes } = require('express')
const router = new Routes()

const authMiddleware = require('../../middlewares/auth-middleware')

const userController = require('../../controllers/user.controller')
const authController = require('../../controllers/auth.controller')
const productController = require('../../controllers/product.controller')
const stripeController = require('../../controllers/stripe.controller')
const orderController = require('../../controllers/order.controller')

router.get('/users', authMiddleware, userController.getUsers)
router.get('/users/:user_id/orders', authMiddleware, orderController.getOrders)

router.post('/registration', userController.createUser)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/activate/:link', authController.activate)
router.get('/refresh', authController.refresh)
router.post('/reset-password', authController.sendResetPasswordResponse)
router.post('/reset-password/:reset_link', authController.resetPassword)

router.get('/products', productController.getProduct)
router.post('/products', productController.createProduct)
router.delete('/products/:product_id', productController.deleteProduct)

router.post('/stripe/pay', stripeController.pay)

module.exports = router

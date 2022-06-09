const { Router: Routes } = require('express')
const router = new Routes()

const authRoutes = require('./auth')
const adminRoutes = require('./admin')

const authMiddleware = require('../../middlewares/auth-middleware')
const basicAuthMiddleware = require('../../middlewares/basic-auth')

const userController = require('../../controllers/user.controller')
const productController = require('../../controllers/product.controller')
const stripeController = require('../../controllers/stripe.controller')
const orderController = require('../../controllers/order.controller')

router.use('/', authRoutes)

router.use('/admin', basicAuthMiddleware, adminRoutes)

router.get('/users', authMiddleware, userController.getUsers)
router.get('/users/:user_id/orders', authMiddleware, orderController.getOrders)

router.get('/products', productController.getProduct)

router.post('/stripe/pay', stripeController.pay)

module.exports = router

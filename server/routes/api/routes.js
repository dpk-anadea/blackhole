const { Router: Routes } = require('express')
const router = new Routes()

const authMiddleware = require('../../middlewares/auth-middleware')

const userController = require('../../controllers/user.controller')
const authController = require('../../controllers/auth.controller')
const productController = require('../../controllers/product.controller')
const stripeController = require('../../controllers/stripe.controller')
const OrderService = require('../../service/order.service')

router.get('/users', authMiddleware, userController.getUsers)

router.post('/registration', userController.createUser)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/activate/:link', authController.activate)
router.get('/refresh', authController.refresh)

router.get('/products', productController.getProduct)
router.post('/products', productController.createProduct)
router.delete('/products/:id', productController.deleteProduct)

router.post('/stripe/pay', stripeController.pay)
router.post('/stripe/webhook', stripeController.webhook)

router.post('/order', async (req, res, next) => {
  const order = await OrderService.createOrder(req.body.user, req.body.products)
  res.json(order)
})

module.exports = router

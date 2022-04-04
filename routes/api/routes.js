const { Router: Routes } = require('express')
const router = new Routes()

const userController = require('../../controllers/user.controller')
const authController = require('../../controllers/auth.controller')

router.post('/users', userController.createUser)
router.get('/users', userController.getUser)

router.post('/login', authController.login)

module.exports = router

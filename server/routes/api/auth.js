const { Router: Routes } = require('express')
const router = new Routes()

const userController = require('../../controllers/user.controller')
const authController = require('../../controllers/auth.controller')

router.post('/registration', userController.createUser)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/activate/:link', authController.activate)
router.get('/refresh', authController.refresh)
router.post('/reset-password', authController.sendResetPasswordResponse)
router.post('/reset-password/:reset_link', authController.resetPassword)

module.exports = router

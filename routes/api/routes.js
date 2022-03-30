const { Router: Routes } = require('express')
const router = new Routes()

const userController = require('../../controllers/user.controller')

router.post('/users', userController.createUser)
// router.get('/users', userController.getUser)

module.exports = router

const { User } = require('../models')
const createUser = require('../service/user/createUser')

class UsersController {
  async createUser(req, res, next) {
    try {
      const user = req.body
      const userData = await createUser(user)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
      })

      res.json(userData)
    } catch (err) {
      next(err)
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await User.findAll()
      res.json(users)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new UsersController()

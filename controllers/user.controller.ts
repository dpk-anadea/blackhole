const { User } = require('../models')

class UsersController {
  async createUser(req, res) {
    const user = req.body
    try {
      const newUser = await User.create({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        phone: user.phone
      })

      res.json(newUser)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

  async getUser (req, res) {
    try {
      const users = await User.findAll()
      res.json(users)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }
}

module.exports = new UsersController()

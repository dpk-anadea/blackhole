// const db = require('../database/db')
const { User } = require('../models')

class UsersController {
  async createUser(req, res) {
    const user = req.body
    const newUser = await User.create({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      phone: user.phone
    })
    res.json(newUser.rows[0])
  }

  // async getUser (req, res) {
  //   const users = await db.query('SELECT * FROM users')
  //   res.json(users.rows)
  // }
}

module.exports = new UsersController()

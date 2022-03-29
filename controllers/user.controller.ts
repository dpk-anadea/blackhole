const db = require('../database/db')

class UserController {
  async createUser (req, res) {
    const user = req.body
    const newUser = await db.query('INSERT INTO users (first_name, last_name, phone, email, password) values ($1, $2, $3, $4, $5) RETURNING *', [user.first_name, user.last_name, user.phone, user.email, user.password])
    res.json(newUser.rows[0])
  }

  async getUser (req, res) {
    const users = await db.query('SELECT * FROM users')
    res.json(users.rows)
  }
}

module.exports = new UserController()

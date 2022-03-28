const db = require('../database/db')

class UserController {
  async createUser (req, res) {
    const user = req.body
    const newUser = await db.query('INSERT INTO users (user_first_name, user_last_name, user_phone_number, user_email, user_password) values ($1, $2, $3, $4, $5) RETURNING *', [user.user_first_name, user.user_last_name, user.user_phone_number, user.user_email, user.user_password])
    res.json(newUser.rows[0])
  }

  async getUser (req, res) {
    const users = await db.query('SELECT * FROM users')
    res.json(users.rows)
  }
}

module.exports = new UserController()

import { secret } from '../config/token-config.js'
import { User } from '../models'

const jwt = require('jsonwebtoken')

const generateAccessToken = (id: number, email: string) => {
  const payload = {
    id,
    email
  }
  return jwt.sign(payload, secret, { expiresIn: '24h' })
}

class AuthController {
  async login(req, res) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ where: { email } })
      if(!user) {
        return res.status(400).json({ message: `user ${email} not found` })
      }

      const isValidPassword = password === user.password
      if(!isValidPassword) {
        return res.status(400).json({ message: `wrong password` }) 
      }

      const token = generateAccessToken(user.id, user.email)

      res.json({ token })
    } catch (err) {
      console.log(err)
      return res.status(400).json(err)
    }
  }
}

module.exports = new AuthController()

import { User } from '../models'
const tokenService = require('../service/token.service')
const ApiError = require('../src/helpers/api-error')

class UsersController {
  async createUser(req, res, next) {
    const { first_name, last_name, email, password, phone } = req.body
    try {
      const candidate =  await User.findOne({ where: { email: email } })

      if (candidate) {
        throw ApiError.BadRequest(`user with email ${email} already exists`)
      }

      const newUser = await User.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        phone: phone
      })

      const tokens = tokenService.generateTokens({ id: newUser.id, email: newUser.email })

      await tokenService.saveToken(newUser.id, tokens.refreshToken)

      res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

      res.json({ ...tokens, user: newUser })
    } catch (err) {
      next(err)
    }
  }

  async getUser (req, res, next) {
    try {
      const users = await User.findAll()
      res.json(users)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new UsersController()

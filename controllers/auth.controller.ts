import { User } from '../models'

const tokenService = require('../service/token.service')
const ApiError = require('../src/helpers/api-error')

class AuthController {
  async login(req, res, next) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ where: { email } })
      if(!user) {
        throw ApiError.BadRequest(`user ${email} not found`)
      }

      const isValidPassword = password === user.password
      if(!isValidPassword) {
        throw ApiError.BadRequest('wrong password') 
      }

      const tokens = tokenService.generateTokens({ id: user.id, email: user.email })
      await tokenService.saveToken(user.id, tokens.refreshToken)
      res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

      res.json({ ...tokens, user })
    } catch (err) {
      next(err)
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const token = await tokenService.removeToken(refreshToken)

      res.clearCookie('refreshToken')
      res.json(token)
    } catch (err) {
      next(err)
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies

      if(!refreshToken) {
        throw ApiError.UnauthorizedError()
      }

      const userData = tokenService.validateRefreshToken(refreshToken)
      const tokenFromDb = await tokenService.findToken(refreshToken)

      if(!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError()
      }

      const user = await User.findOne({ where: { id: userData.id } })
      const tokens = tokenService.generateTokens({ id: user.id, email: user.email })

      await tokenService.saveToken(user.id, tokens.refreshToken)
      res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
      res.json({ ...tokens, user })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new AuthController()

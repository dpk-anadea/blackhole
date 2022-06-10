const login = require('../service/user/login')
const logout = require('../service/user/logout')
const activate = require('../service/user/activate')
const refresh = require('../service/user/refresh')
const sendResetPassword = require('../service/user/sendResetPassword')
const resetPassword = require('../service/user/resetPassword')

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const userData = await login(email, password)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
      })
      res.json(userData)
    } catch (err) {
      next(err)
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const token = await logout(refreshToken)

      res.clearCookie('refreshToken')
      res.json(token)
    } catch (err) {
      next(err)
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link
      await activate(activationLink)

      res.redirect(process.env.CLIENT_URL)
    } catch (err) {
      next(err)
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const userData = await refresh(refreshToken)

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
      })
      res.json(userData)
    } catch (err) {
      next(err)
    }
  }

  async sendResetPasswordResponse(req, res, next) {
    try {
      const email = req.body.email
      const userData = await sendResetPassword(email)

      res.json(userData)
    } catch (err) {
      next(err)
    }
  }

  async resetPassword(req, res, next) {
    try {
      const resetPasswordLink = req.params.reset_link
      const newPassword = req.body.password
      await resetPassword(resetPasswordLink, newPassword)

      res.json('Password changed!')
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new AuthController()

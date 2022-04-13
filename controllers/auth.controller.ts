import userService from '../service/user.service'

class AuthController {
  async login (req, res, next) {
    try {
      const { email, password } = req.body
      const userData = await userService.login(email, password)
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
      res.json(userData)
    } catch (err) {
      next(err)
    }
  }

  async logout (req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const token = await userService.logout(refreshToken)

      res.clearCookie('refreshToken')
      res.json(token)
    } catch (err) {
      next(err)
    }
  }

  async refresh (req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const userData = await userService.refresh(refreshToken)

      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
      res.json(userData)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new AuthController()

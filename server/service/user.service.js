const bcrypt = require('bcrypt')
const uuid = require('uuid')
const { User } = require('../models')
const ApiError = require('../helpers/api-error')
const tokenService = require('../service/token.service')
const mailService = require('../service/mail.service')
class UserService {
  async createUser(userData) {
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phone
    } = userData
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      throw ApiError.BadRequest(`user with email ${email} already exists`)
    }

    const activationLink = uuid.v4()
    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phone,
      activation_link: activationLink
    })
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    )

    const tokens = tokenService.generateTokens({
      id: user.id,
      email: user.email
    })
    await tokenService.saveToken(user.id, tokens.refreshToken)

    return { ...tokens, user }
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw ApiError.BadRequest(`user ${email} not found`)
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest('wrong password')
    }

    const tokens = tokenService.generateTokens({
      id: user.id,
      email: user.email
    })
    await tokenService.saveToken(user.id, tokens.refreshToken)
    return { ...tokens, user }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }

  async activate(activationLink) {
    const user = await User.findOne({
      where: { activation_link: activationLink }
    })
    if (!user) throw ApiError.BadRequest('invalid link')

    await user.update({ activated: true })
    await user.save()
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError()
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await tokenService.findToken(refreshToken)

    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError()
    }

    const user = await User.findOne({ where: { id: userData.id } })
    const tokens = tokenService.generateTokens({
      id: user.id,
      email: user.email
    })

    await tokenService.saveToken(user.id, tokens.refreshToken)
    return { ...tokens, user }
  }

  async resetPassword(email) {
    const user = await User.findOne({
      where: { email }
    })
    if (!user) throw ApiError.BadRequest('invalid link')

    const reset_link = uuid.v4()

    await mailService.sendResetPasswordMail(email, process.env.CLIENT_URL)

    await user.update({ reset_password_link: reset_link })
    await user.save()
  }

  async resetPasswordChange(resetPasswordLink, password) {
    const user = await User.findOne({
      where: { reset_password_link: resetPasswordLink }
    })
    if (!user) throw ApiError.BadRequest('invalid link')

    const hashPassword = await bcrypt.hash(password, 3)

    await user.update({ password: hashPassword })
    await user.save()
  }
}

module.exports = new UserService()

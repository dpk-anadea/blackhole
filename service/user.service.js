const bcrypt = require('bcrypt')
const uuid = require('uuid')
const { User } = require('../models')
const ApiError = require('../src/helpers/api-error')
const tokenService = require('../service/token.service')
const mailService = require('../service/mail.service')
class UserService {
  async createUser (userData) {
    const { first_name: firstName, last_name: lastName, email, password, phone } = userData
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      throw ApiError.BadRequest(`user with email ${email} already exists`)
    }

    const hashPassword = await bcrypt.hash(password, 3)
    const activationLink = uuid.v4()
    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashPassword,
      phone,
      activation_link: activationLink
    })
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

    const tokens = tokenService.generateTokens({ id: user.id, email: user.email })
    await tokenService.saveToken(user.id, tokens.refreshToken)

    return { ...tokens, user }
  }

  async login (email, password) {
    const user = await User.findOne({ where: { email } })
    if (!user) {
      throw ApiError.BadRequest(`user ${email} not found`)
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest('wrong password')
    }

    const tokens = tokenService.generateTokens({ id: user.id, email: user.email })
    await tokenService.saveToken(user.id, tokens.refreshToken)
    return { ...tokens, user }
  }

  async logout (refreshToken) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }

  async activate (activationLink) {
    const user = await User.findOne({ where: { activation_link: activationLink } })
    if (!user) throw new Error('invalid link')

    await user.update({ activated: true })
    await user.save()
  }

  async refresh (refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError()
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await tokenService.findToken(refreshToken)
    // console.log('-------------', userData)
    // console.log('-------------', tokenFromDb)
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError()
    }

    const user = await User.findOne({ where: { id: userData.id } })
    const tokens = tokenService.generateTokens({ id: user.id, email: user.email })

    await tokenService.saveToken(user.id, tokens.refreshToken)
    return { ...tokens, user }
  }
}

module.exports = new UserService()

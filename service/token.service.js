const jwt = require('jsonwebtoken')
const { accessSecret, refreshSecret } = require('../config/token-config')
const { Token } = require('../models')

class TokenService {
  generateTokens (payload) {
    const accessToken = jwt.sign(payload, accessSecret, { expiresIn: '1h' })
    const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: '30ds' })
    return {
      accessToken,
      refreshToken
    }
  }

  validateAccessToken (token) {
    try {
      const userData = jwt.verify(token, accessSecret)
      return userData
    } catch (e) {
      return null
    }
  }

  validateRefreshToken (token) {
    try {
      const userData = jwt.verify(token, refreshSecret)
      return userData
    } catch (e) {
      return null
    }
  }

  async saveToken (userId, refreshToken) {
    const tokenData = await Token.findOne({ where: { user: userId } })
    if (tokenData) {
      await tokenData.update({ refresh_token: refreshToken })
      return tokenData.save()
    }
    const token = await Token.create({ user: userId, refresh_token: refreshToken })
    return token
  }

  async removeToken (refreshToken) {
    const tokenData = await Token.destroy({ where: { refresh_token: refreshToken } })
    return tokenData
  }

  async findToken (refreshToken) {
    const tokenData = await Token.findOne({ where: { refresh_token: refreshToken } })
    return tokenData
  }
}

module.exports = new TokenService()

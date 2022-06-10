const jwt = require('jsonwebtoken')
const { accessSecret, refreshSecret } = require('../../../config/token-config')

module.exports = (payload) => {
  const accessToken = jwt.sign(payload, accessSecret, { expiresIn: '1h' })
  const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: '30d' })
  return {
    accessToken,
    refreshToken
  }
}

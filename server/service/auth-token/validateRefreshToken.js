const jwt = require('jsonwebtoken')
const { refreshSecret } = require('../../../config/token-config')

module.exports = (token) => {
  try {
    const userData = jwt.verify(token, refreshSecret)
    return userData
  } catch (e) {
    return null
  }
}

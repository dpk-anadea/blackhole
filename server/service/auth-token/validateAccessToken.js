const jwt = require('jsonwebtoken')
const { accessSecret } = require('../../../config/token-config')

module.exports = (token) => {
  try {
    const userData = jwt.verify(token, accessSecret)
    return userData
  } catch (e) {
    return null
  }
}

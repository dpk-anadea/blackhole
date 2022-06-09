const tokenService = require('../token.service')

module.exports = async (refreshToken) => {
  const token = await tokenService.removeToken(refreshToken)
  return token
}

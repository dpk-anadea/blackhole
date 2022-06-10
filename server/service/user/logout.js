const removeToken = require('../auth-token/removeToken')

module.exports = async (refreshToken) => {
  const token = await removeToken(refreshToken)
  return token
}

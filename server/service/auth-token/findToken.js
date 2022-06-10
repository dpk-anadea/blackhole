const { Token } = require('../../models')

module.exports = async (refreshToken) => {
  const tokenData = await Token.findOne({
    where: { refresh_token: refreshToken }
  })
  return tokenData
}

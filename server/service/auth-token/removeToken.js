const { Token } = require('../../models')

module.exports = async (refreshToken) => {
  const tokenData = await Token.destroy({
    where: { refresh_token: refreshToken }
  })
  return tokenData
}

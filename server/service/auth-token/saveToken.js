const { Token } = require('../../models')

module.exports = async (userId, refreshToken) => {
  const tokenData = await Token.findOne({ where: { user: userId } })
  if (tokenData) {
    await tokenData.update({ refresh_token: refreshToken })
    return tokenData.save()
  }
  const token = await Token.create({
    user: userId,
    refresh_token: refreshToken
  })
  return token
}

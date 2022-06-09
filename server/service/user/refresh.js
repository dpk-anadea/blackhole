const { User } = require('../../models')
const ApiError = require('../../helpers/api-error')
const tokenService = require('../token.service')

module.exports = async (refreshToken) => {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError()
  }
  const userData = tokenService.validateRefreshToken(refreshToken)
  const tokenFromDb = await tokenService.findToken(refreshToken)

  if (!userData || !tokenFromDb) {
    throw ApiError.UnauthorizedError()
  }

  const user = await User.findOne({ where: { id: userData.id } })
  const tokens = tokenService.generateTokens({
    id: user.id,
    email: user.email
  })

  await tokenService.saveToken(user.id, tokens.refreshToken)
  return { ...tokens, user }
}

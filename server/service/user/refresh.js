const { User } = require('../../models')
const ApiError = require('../../helpers/api-error')
const generateTokens = require('../auth-token/generateTokens')
const validateRefreshToken = require('../auth-token/validateRefreshToken')
const saveToken = require('../auth-token/saveToken')
const findToken = require('../auth-token/findToken')

module.exports = async (refreshToken) => {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError()
  }
  const userData = validateRefreshToken(refreshToken)
  const tokenFromDb = await findToken(refreshToken)

  if (!userData || !tokenFromDb) {
    throw ApiError.UnauthorizedError()
  }

  const user = await User.findOne({ where: { id: userData.id } })
  const tokens = generateTokens({
    id: user.id,
    email: user.email
  })

  await saveToken(user.id, tokens.refreshToken)
  return { ...tokens, user }
}

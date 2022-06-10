const bcrypt = require('bcrypt')
const { User } = require('../../models')
const ApiError = require('../../helpers/api-error')
const generateTokens = require('../auth-token/generateTokens')
const saveToken = require('../auth-token/saveToken')

module.exports = async (email, password) => {
  const user = await User.findOne({ where: { email } })

  if (!user) {
    throw ApiError.BadRequest(`user ${email} not found`)
  }
  const isPassEquals = await bcrypt.compare(password, user.password)
  if (!isPassEquals) {
    throw ApiError.BadRequest('wrong password')
  }

  const tokens = generateTokens({
    id: user.id,
    email: user.email
  })
  await saveToken(user.id, tokens.refreshToken)
  return { ...tokens, user }
}

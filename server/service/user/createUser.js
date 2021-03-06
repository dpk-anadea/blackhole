const uuid = require('uuid')
const { User } = require('../../models')
const ApiError = require('../../helpers/api-error')
const generateTokens = require('../auth-token/generateTokens')
const saveToken = require('../auth-token/saveToken')
const mailService = require('../mail.service')

module.exports = async (userData) => {
  const {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    phone
  } = userData
  const candidate = await User.findOne({ where: { email } })
  if (candidate) {
    throw ApiError.BadRequest(`user with email ${email} already exists`)
  }

  const activationLink = uuid.v4()
  const user = await User.create({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    phone,
    activation_link: activationLink
  })
  await mailService.sendActivationMail(
    email,
    `${process.env.API_URL}/api/activate/${activationLink}`
  )

  const tokens = generateTokens({
    id: user.id,
    email: user.email
  })
  await saveToken(user.id, tokens.refreshToken)

  return { ...tokens, user }
}

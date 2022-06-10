const uuid = require('uuid')
const { User } = require('../../models')
const ApiError = require('../../helpers/api-error')
const mailService = require('../mail.service')

module.exports = async (email) => {
  const user = await User.findOne({
    where: { email }
  })
  if (!user) throw ApiError.BadRequest('invalid link')

  const reset_link = uuid.v4()

  await mailService.sendResetPasswordMail(
    email,
    `${process.env.CLIENT_URL}/change-password/${reset_link}`
  )

  await user.update({ reset_password_link: reset_link })
  await user.save()
}

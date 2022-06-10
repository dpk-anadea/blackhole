const { User } = require('../../models')
const ApiError = require('../../helpers/api-error')

module.exports = async (resetPasswordLink, password) => {
  const user = await User.findOne({
    where: { reset_password_link: resetPasswordLink }
  })
  if (!user) throw ApiError.BadRequest('invalid link')

  await user.update({ password: password })
  await user.save()
}

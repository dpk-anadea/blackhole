const { User } = require('../../models')
const ApiError = require('../../helpers/api-error')

module.exports = async (activationLink) => {
  const user = await User.findOne({
    where: { activation_link: activationLink }
  })
  if (!user) throw ApiError.BadRequest('invalid link')

  await user.update({ activated: true })
  await user.save()
}

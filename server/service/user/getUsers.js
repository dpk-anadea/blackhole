const { User } = require('../../models')

module.exports = async () => {
  return await User.findAll()
}

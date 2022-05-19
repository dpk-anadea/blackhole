const ApiError = require('../helpers/api-error')

// eslint-disable-next-line no-unused-vars
module.exports = function (err, _req, res, next) {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors })
  }
  // return res.status(500).json({ message: 'unexpected error' })

  if (err.raw?.message) {
    return res.status(err.statusCode).json({ message: err.raw?.message })
  }

  return res.json({ message: err.message, err })
}

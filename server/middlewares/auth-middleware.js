const ApiError = require('../helpers/api-error')
const validateAccessToken = require('../service/auth-token/validateAccessToken')

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError())
    }

    const accessToken = authorizationHeader.split(' ')[1]
    if (!accessToken) {
      return next(ApiError.UnauthorizedError())
    }

    const userData = validateAccessToken(accessToken)
    if (!userData) {
      return next(ApiError.UnauthorizedError())
    }

    req.user = userData
    next()
  } catch (e) {
    return next(ApiError.UnauthorizedError())
  }
}

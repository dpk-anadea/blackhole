module.exports = class ApiError extends Error {
  status
  errors

  constructor(status, message, errors = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError() {
    return newApiError(401, 'User is not authorized')
  }

  static BadRequest() {
    return new ApiError(400, message, errors)
  }
}
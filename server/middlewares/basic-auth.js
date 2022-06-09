module.exports = basicAuth

async function basicAuth(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader || authHeader.indexOf('Basic ') === -1) {
    return res.status(401).json({ message: 'Missing Authorization Header' })
  }

  const base64Credentials = authHeader.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [username, password] = credentials.split(':')
  const isValidCredentials =
    username.toLowerCase() === 'admin' && password === 'bhadmin'

  if (!isValidCredentials) {
    res.setHeader('WWW-Authenticate', 'Basic')
    return res
      .status(401)
      .json({ message: 'Invalid Authentication Credentials' })
  }

  next()
}

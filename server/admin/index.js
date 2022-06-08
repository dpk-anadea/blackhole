const AdminJS = require('adminjs')
const AdminJSSequelize = require('@adminjs/sequelize')
const AdminJSExpress = require('@adminjs/express')
const AdminJSOptions = require('./adminJSOptions')

AdminJS.registerAdapter(AdminJSSequelize)

const ADMIN = {
  email: 'admin',
  password: 'secret'
}

const adminJs = new AdminJS(AdminJSOptions)

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  },
  cookieName: 'adminjs',
  cookiePassword: 'somePassword'
})

module.exports = router

const devApp = require('./app')
const { sequelize } = require('./models')

const PORT = process.env.APP_PORT || 3030

devApp.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`)
  await sequelize.authenticate()
  console.log('Database Connected!')
})

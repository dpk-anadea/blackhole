const app = require('./server/app')
const { sequelize } = require('./server/models')

const PORT = process.env.APP_PORT || 3030

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`)
  await sequelize.authenticate()
  console.log('Database Connected!')
})

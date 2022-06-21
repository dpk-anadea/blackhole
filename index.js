const app = require('./server/app')
const { sequelize } = require('./server/models')

const PORT = process.env.PORT || process.env.APP_PORT || 3030

app.get('*', function (req, res) {
  // eslint-disable-next-line no-undef
  res.send(path.join(__dirname, './public/index.html'))
})

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`)
  await sequelize.authenticate()
  console.log('Database Connected!')
})

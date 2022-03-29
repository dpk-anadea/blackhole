const devApp = require('./app')

const PORT = process.env.APP_PORT || 3030

devApp.listen(PORT, () => console.log(`Server started on port ${PORT}`))
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'dgs',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'online_shop'
})

module.exports = pool
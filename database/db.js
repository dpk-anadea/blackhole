const Pool = require('pg').Pool
const pool = new Pool({
  user: 'dpk',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'online_shop'
})

module.exports = pool

const Pool = require('pg').Pool
const dotenv = require('dotenv')

dotenv.config()

const typeDB = process.env.NODE_ENV === 'test' ? 'TEST_DB_' : 'DB_'

const pool = new Pool({
  user: process.env[typeDB + 'USERNAME'],
  password: process.env[typeDB + 'PASSWORD'],
  host: process.env[typeDB + 'HOST'],
  port: process.env[typeDB + 'PORT'],
  database: process.env[typeDB + 'DATABASE']
})

module.exports = pool

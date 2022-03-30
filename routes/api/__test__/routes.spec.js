import request from 'supertest'
import app from '../../../app'
import db from '../../../database/db'

describe('Space test suite', () => {
  const initUser = {
    id: 2,
    first_name: 'Itan',
    last_name: 'Pol',
    phone: '84312454',
    email: 'qwe@qwe.com',
    password: '123456'
  }

  beforeEach(() => {
    return db.query('START TRANSACTION');
  });
  afterEach(() => {
    return db.query('ROLLBACK');
  });
  afterAll(() => {
    return db.end()
  })

  it.skip('tests post /users endpoints', async() => {
    const response = await request(app).post('/api/users').send(initUser)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(initUser)
  })

  it.skip('tests get /users endpoints', async() => {
    const response = await request(app).get('/api/users')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveLength(2)
    expect(response.body).toEqual(initUser)
  })
})

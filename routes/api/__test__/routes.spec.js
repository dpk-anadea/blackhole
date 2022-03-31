import request from 'supertest'
import app from '../../../app'
import { sequelize } from '../../../models'

describe('Space test suite', () => {
  const initUser = {
    id: 2,
    first_name: 'Itan',
    last_name: 'Pol',
    phone: '84312454',
    email: 'qwe@qwe.com',
    password: '123456'
  }

  // beforeEach(() => {
  //   return sequelize.query('START TRANSACTION');
  // });
  // afterEach(() => {
  //   return sequelize.query('ROLLBACK');
  // });
  afterAll(() => {
    return sequelize.close()
  })

  it.skip('tests post /users endpoints', async() => {
    const response = await request(app).post('/api/users').send(initUser)

    console.log(response)

    expect(response.statusCode).toBe(200)
  })

  it('tests get /users endpoints', async() => {
    const response = await request(app).get('/api/users')

    console.log(response)

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveLength(2)
    // expect(response.body).toEqual(initUser)
  })
})

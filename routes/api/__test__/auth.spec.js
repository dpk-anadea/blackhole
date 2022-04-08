import request from 'supertest'

import app from '../../../app'
import { sequelize } from '../../../models'
import clearDB from '../../../tests/clearDB'


describe.skip('fsdf', () => {
  const initUser = {
    first_name: 'Itan',
    last_name: 'Pol',
    phone: '84312454',
    email: 'qwe@qwe.com',
    password: '123456'
  }

  beforeAll(async () => {
    await clearDB()
  })

  afterAll(() => {
    return sequelize.close()
  })

  it('tests post /users endpoints', async() => {
    const response = await request(app).post('/api/users').send(initUser)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      ...initUser,
      id: expect.any(Number),
      createdAt:  expect.any(String),
      updatedAt:  expect.any(String)
    })
  })

  it('tests get /users endpoints', async() => {
    const response = await request(app).get('/api/users')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveLength(1)
    expect(response.body).toEqual([{
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
      user: {
        ...initUser,
        id: expect.any(Number),
        createdAt:  expect.any(String),
        updatedAt:  expect.any(String)
      }
    }])
  })
})

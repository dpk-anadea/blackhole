import request from 'supertest'

import app from '../../../app'
import { sequelize } from '../../../models'

describe('Users endpoints', () => {
  const initUser = {
    first_name: 'Itan',
    last_name: 'Pol',
    phone: '84312454',
    email: 'qwe@qwe.com',
    password: '123456'
  }

  beforeAll(async () => {
    await sequelize.truncate({ cascade: true })
  })

  afterAll(() => {
    return sequelize.close()
  })

  it('it should create user', async() => {
    const response = await request(app).post('/api/users').send(initUser)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
      user: {
        ...initUser,
        id: expect.any(Number),
        createdAt:  expect.any(String),
        updatedAt:  expect.any(String)
      }
    })
  })

  it('it should get users', async() => {
    const response = await request(app).get('/api/users')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveLength(1)
    expect(response.body).toEqual([{
      ...initUser,
      id: expect.any(Number),
      createdAt:  expect.any(String),
      updatedAt:  expect.any(String)
    }])
  })
})

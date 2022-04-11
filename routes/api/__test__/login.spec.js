import request from 'supertest'

import app from '../../../app'
import { sequelize } from '../../../models'
import clearDB from '../../../tests/clearDB'
import userFactory from '../../../database/factory/user.factory'


describe('User authorization', () => {
  let user, email, password

  beforeAll(async () => {
    await clearDB()
    user = await userFactory.create('user')
    email = user.email
    password = user.password
  })

  afterAll(() => {
    return sequelize.close()
  })

  it('it should login', async() => {
    const response = await request(app).post('/api/login').send({ email, password })

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
      user: {
        ...user.dataValues,
        createdAt:  expect.any(String),
        updatedAt:  expect.any(String)
      }
    })
  })

  it('it should password error if wrong password', async() => {
    const response = await request(app).post('/api/login').send({ email, password: '111111' })

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toEqual('wrong password')
  })

  it('given not register email, return error message: user not found', async() => {
    const wrongEmail = 'user15@example.com'
    const response = await request(app).post('/api/login').send({ email: wrongEmail, password })

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toEqual(`user ${wrongEmail} not found`)
  })
})

import request from 'supertest'
import app from '../../../app'
import { sequelize } from '../../../models'
import clearDB from '../../../tests/clearDB'
import userFactory from '../../../database/factory/user.factory'
import { Token } from '../../../models'

describe('User authorization', () => {
  let user, email, password, refreshToken

  beforeAll(async () => {
    await clearDB()
    user = await userFactory.create('user')
    email = user.email
    password = user.password
  })

  afterAll(() => {
    return sequelize.close()
  })

  const subject = async (email, password) => await request(app).post('/api/login').send({ email, password })

  it('logs the user in', async() => {
    const response = await subject(email, password)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
      user: {
        ...user.dataValues,
        createdAt: expect.any(String),
        updatedAt: expect.any(String)
      }
    })
  })

  describe('when the password is wrong', () => {
    const wrongPassword = '1111111'

    it('rejects the query', async() => {
      const response = await subject(email, wrongPassword)
  
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toEqual('wrong password')
    })
  })

  describe('when email is not found', () => {
    const wrongEmail = 'user15@example.com'

    it('returns user not found', async() => {
      const response = await subject(wrongEmail, password)
  
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toEqual(`user ${wrongEmail} not found`)
    })
  })

  it('asdf', async() => {
    const token = await Token.findOne({ where: { user: user.id } })
    refreshToken = token.refresh_token

    const response = await request(app).get('/api/refresh').set('Cookie', [`refreshToken=${refreshToken}`])
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
      user: {
        ...user.dataValues,
        createdAt: expect.any(String),
        updatedAt: expect.any(String)
      }
    })
    console.log(response.body.refreshToken)
    expect(response.body.refreshToken).not.toEqual(refreshToken)
  })

  it('allows user to log out', async() => {
    const token = await Token.findOne({ where: { user: user.id } })
    refreshToken = token.refresh_token

    const response = await request(app).post('/api/logout').set('Cookie', [`refreshToken=${refreshToken}`])
    expect(response.statusCode).toBe(200)

    const newResponse = await request(app).get('/api/refresh').set('Cookie', [`refreshToken=${refreshToken}`])
    expect(newResponse.body.message).toBe('User is not authorized')
  })
})

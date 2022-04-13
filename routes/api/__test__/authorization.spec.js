import request from 'supertest'
import app from '../../../app'
import { sequelize, Token } from '../../../models'
import userFactory from '../../../database/factory/user.factory'

describe('User authorization', () => {
  let user, email, token
  const password = '123456'

  beforeAll(async () => {
    await sequelize.truncate({ cascade: true })
    user = await userFactory.create('user')
    email = user.email
  })
  beforeEach(async () => {
    token = await Token.findOne({ where: { user: user.id } })
  })
  afterAll(() => {
    return sequelize.close()
  })

  describe('logs the user in', () => {
    const subject = async (email, password) => await request(app).post('/api/login').send({ email, password })

    describe('when valid email and password', () => {
      it('return user and tokens', async () => {
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
    })

    describe('when the password is wrong', () => {
      const wrongPassword = '1111111'

      it('rejects the query', async () => {
        const response = await subject(email, wrongPassword)
        expect(response.statusCode).toBe(400)
        expect(response.body.message).toEqual('wrong password')
      })
    })

    describe('when email is not found', () => {
      const wrongEmail = 'user15@example.com'

      it('returns user not found', async () => {
        const response = await subject(wrongEmail, password)
        expect(response.statusCode).toBe(400)
        expect(response.body.message).toEqual(`user ${wrongEmail} not found`)
      })
    })
  })

  describe('allows refreshing token', () => {
    const subject = async (cookies = []) => await request(app).get('/api/refresh').set('Cookie', cookies)

    describe('when user have valid token', () => {
      it('return updated valid token', async () => {
        const response = await subject([`refreshToken=${token.refresh_token}`])
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
        expect(response.body.refreshToken).toEqual(token.refresh_token)
      })
    })

    describe('when user don\'t have valid token in cookie', () => {
      it('return updated valid token', async () => {
        const response = await subject()
        expect(response.statusCode).toBe(401)
        expect(response.body.message).toEqual('User is not authorized')
      })
    })

    describe('when user don\'t have invalid token', () => {
      it('return updated valid token', async () => {
        const response = await subject([`refreshToken=${token.refresh_token}not`])
        expect(response.statusCode).toBe(401)
        expect(response.body.message).toEqual('User is not authorized')
      })
    })
  })

  describe('when log out', () => {
    const subject = async (refreshToken) => await request(app).post('/api/logout').set('Cookie', [`refreshToken=${refreshToken}`])

    it('unauthorized user', async () => {
      const response = await subject(token.refresh_token)
      expect(response.statusCode).toBe(200)
      expect(response.cookies).not.toBe(expect.anything())

      token = await Token.findOne({ where: { user: user.id } })
      expect(response.cookies).not.toBe(expect.anything())
    })
  })
})

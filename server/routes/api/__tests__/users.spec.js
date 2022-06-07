import request from 'supertest'

import app from '@server/app'
import { sequelize, User } from '@server/models'
import userFactory from '@factory/user.factory'

jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockReturnValue(() => {})
  })
}))

describe('Users', () => {
  let user
  beforeEach(async () => {
    await sequelize.truncate({ cascade: true })
  })

  afterAll(() => {
    return sequelize.close()
  })

  describe('allows create user', () => {
    beforeEach(async () => {
      user = await userFactory.attrs('user')
    })

    const subject = async (user) =>
      await request(app).post('/api/registration').send(user)

    describe('when valid data', () => {
      it('return new user', async () => {
        const response = await subject(user)

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          accessToken: expect.any(String),
          refreshToken: expect.any(String),
          user: {
            ...user,
            id: expect.any(Number),
            password: expect.any(String),
            activation_link: expect.any(String),
            reset_password_link: null,
            createdAt: expect.any(String),
            updatedAt: expect.any(String)
          }
        })
      })
    })

    describe('when email already exists', () => {
      it('return error: user with email already exists', async () => {
        await userFactory.create('user')
        const response = await subject(user)

        expect(response.statusCode).toBe(400)
        expect(response.body.message).toEqual(
          `user with email ${user.email} already exists`
        )
      })
    })
  })

  describe('allows get users', () => {
    beforeEach(async () => {
      user = await userFactory.create('user')
    })

    const login = async (email, password) =>
      await request(app).post('/api/login').send({ email, password })
    const password = '123456'

    describe('when user authorized', () => {
      it('get all users', async () => {
        const { body: authUser } = await login(user.email, password)
        const response = await request(app)
          .get('/api/users')
          .set('Authorization', 'Bearer ' + authUser.accessToken)

        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveLength(1)
        expect(response.body).toEqual([
          {
            ...user.dataValues,
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String)
          }
        ])
      })
    })

    describe('when invalid access token', () => {
      it('get all users', async () => {
        const { body: authUser } = await login(user.email, password)
        const response = await request(app)
          .get('/api/users')
          .set('Authorization', 'Bearer not' + authUser.accessToken)

        expect(response.statusCode).toBe(401)
        expect(response.body.message).toEqual('User is not authorized')
      })
    })

    describe('when user unauthorized', () => {
      it('get all users', async () => {
        const response = await request(app).get('/api/users')

        expect(response.statusCode).toBe(401)
        expect(response.body.message).toEqual('User is not authorized')
      })
    })

    describe.skip('when post user id', () => {
      it('get user by id', async () => {
        const currentUser = await userFactory.create('user')
        const response = await request(app).get(`/api/users/${currentUser.id}`)

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          ...currentUser,
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String)
        })
      })
    })

    describe('when post reset password link', () => {
      beforeEach(async () => {
        user = await userFactory.create('user')
      })

      const subject = async (password) =>
        await request(app)
          .post(`/api/reset-password/${user.reset_password_link}`)
          .send({ password })

      it('update password', async () => {
        const response = await subject(password)

        expect(response.statusCode).toBe(200)
        expect(response.body).toMatch('Password changed!')
      })
    })
  })
})

import request from 'supertest'

import app from '../../../app'
import { sequelize } from '../../../models'
import userFactory from '../../../database/factory/user.factory'

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

    const subject = async (user) => await request(app).post('/api/users').send(user)

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
        expect(response.body.message).toEqual(`user with email ${user.email} already exists`)
      })
    })
  })

  describe('allows get', () => {
    beforeEach(async () => {
      user = await userFactory.create('user')
    })

    it('all users', async () => {
      const response = await request(app).get('/api/users')

      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveLength(1)
      expect(response.body).toEqual([{
        ...user,
        id: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String)
      }])
    })
  })
})

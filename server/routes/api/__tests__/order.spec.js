import request from 'supertest'

import app from '@server/app'
import { sequelize } from '@server/models'
// import userFactory from '@factory/user.factory'
// import productFactory from '@factory/product.factory'
// import orderFactory from '@factory/order.factory'

describe('Orders', () => {
  let user
  let product
  // let order
  beforeEach(async () => {
    await sequelize.truncate({ cascade: true })
  })

  afterAll(() => {
    return sequelize.close()
  })

  describe('allows create product', () => {
    beforeEach(async () => {
      user = {
        id: 1,
        first_name: 'Itan',
        last_name: "Pol'",
        phone: '84312454',
        email: 'itan-pol@example.com',
        password: 'hashPassword',
        activated: false,
        activation_link: 'activationLink'
      }
      product = [
        {
          id: 1,
          name: 'Aurora - Instrument Plugin',
          type: 'Plugins',
          description:
            'Our goal was NO filler sounds - we only included sounds that we personally would want to use every day.',
          cost: '100',
          count: 2
        },
        {
          id: 2,
          name: 'Aurora - Instrument Plugin',
          type: 'Plugins',
          description:
            'Our goal was NO filler sounds - we only included sounds that we personally would want to use every day.',
          cost: '100',
          count: 1
        }
      ]
    })

    const subject = async (user, products) =>
      await request(app).post('/api/order').send({ user, products })

    it('create new order', async () => {
      const response = await subject(user, product)

      // expect(response.statusCode).toBe(200)
      expect(response.body).toEqual({
        order: {
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String)
        }
      })
    })
  })
})

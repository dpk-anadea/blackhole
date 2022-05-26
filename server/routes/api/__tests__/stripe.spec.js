import request from 'supertest'

import app from '@server/app'
import { sequelize, Order, OrderItem } from '@server/models'
import userFactory from '@factory/user.factory'
import productFactory from '@factory/product.factory'

jest.mock('stripe', () => () => ({
  charges: {
    create: jest.fn().mockReturnValue({
      receipt_url: 'url',
      status: 'succeeded'
    })
  }
}))

describe('Stripe', () => {
  let user, products, productsData
  const token = { id: 'token_id' }

  beforeEach(async () => {
    await sequelize.truncate({ cascade: true })
    user = await userFactory.create('user')
    products = await productFactory.createMany('product', 2)
    const quantities = {}
    const productsIds = products.map(({ dataValues }, index) => {
      quantities[dataValues.id] = index + 1
      return dataValues.id
    })
    productsData = {
      ids: productsIds,
      quantities
    }
  })

  afterAll(() => {
    return sequelize.close()
  })

  describe('allows pay', () => {
    const subject = async (userId, products) =>
      await request(app)
        .post('/api/stripe/pay')
        .send({ user_id: userId, products, token })

    describe('when pay is successful', () => {
      it('create new order', async () => {
        const response = await subject(user.id, productsData)

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          receipt_url: expect.any(String),
          status: 'succeeded'
        })

        const order = await Order.findOne({ where: { user_id: user.id } })
        const orderItems = await OrderItem.findAll({
          where: {
            order_id: order.id
          }
        })

        expect(order).not.toBeNull()
        expect(orderItems.length).toBe(2)
      })
    })
  })
})

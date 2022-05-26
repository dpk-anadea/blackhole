import request from 'supertest'
import app from '@server/app'
import { sequelize } from '@server/models'
import orderFactory from '@factory/order.factory'
import userFactory from '@factory/user.factory'

describe('Orders', () => {
  let user, orders

  beforeEach(async () => {
    await sequelize.truncate({ cascade: true })

    user = await userFactory.create('user')
    orders = await orderFactory.createMany('order', 2, [
      { user_id: user.id },
      { user_id: user.id }
    ])

    let orderItems = await orderFactory.createMany('order_item', 4, [
      { order_id: orders[0].id },
      { order_id: orders[0].id },
      { order_id: orders[1].id },
      { order_id: orders[1].id }
    ])

    orders = orders.map((order) => {
      order.dataValues.orderItems = orderItems.filter(
        (orderItem) => orderItem.order_id === order.id
      )
      return order
    })
  })

  afterAll(() => {
    return sequelize.close()
  })

  describe('allows get orders', () => {
    it('get all orders', async () => {
      const response = await request(app).get(`/api/users/${user.id}/orders`)

      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveLength(2)
      expect(response.body).toEqual([
        {
          ...orders[0].dataValues,
          orderItems: expect.any(Array),
          createdAt: expect.any(String),
          updatedAt: expect.any(String)
        },
        {
          ...orders[1].dataValues,
          orderItems: expect.any(Array),
          createdAt: expect.any(String),
          updatedAt: expect.any(String)
        }
      ])
    })
  })
})

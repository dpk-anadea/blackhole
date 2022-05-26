import request from 'supertest'

import app from '@server/app'
import { sequelize } from '@server/models'
import orderFactory from '@factory/order.factory'

describe('Orders', () => {
  // let order
  beforeEach(async () => {
    await sequelize.truncate({ cascade: true })
  })

  afterAll(() => {
    return sequelize.close()
  })

  describe('allows get products', () => {
    // beforeEach(async () => {
    //   product = await productFactory.create('product')
    // })
    it('get all products', async () => {
      // const user = await userFactory.create('user')
      const order = await orderFactory.create('order_item')
      // console.log(order)
      // const response = await request(app).get('/api/products')

      // expect(response.statusCode).toBe(200)
      // expect(response.body).toHaveLength(1)
      // expect(response.body).toEqual([
      //   {
      //     ...product.dataValues,
      //     id: expect.any(Number),
      //     createdAt: expect.any(String),
      //     updatedAt: expect.any(String)
      //   }
      // ])
    })
  })
})

import request from 'supertest'

import app from '@server/app'
import { sequelize } from '@server/models'
import productFactory from '@factory/product.factory'

describe('Products', () => {
  let product
  beforeEach(async () => {
    await sequelize.truncate({ cascade: true })
  })

  afterAll(() => {
    return sequelize.close()
  })

  describe('allows create product', () => {
    beforeEach(async () => {
      product = await productFactory.attrs('product')
    })

    const subject = async (product) =>
      await request(app).post('/api/products').send(product)

    it('create new product', async () => {
      const response = await subject(product)

      expect(response.statusCode).toBe(200)
      expect(response.body).toEqual({
        product: {
          ...product,
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String)
        }
      })
    })
  })

  describe('allows get products', () => {
    beforeEach(async () => {
      product = await productFactory.create('product')
    })

    it('get all products', async () => {
      const response = await request(app).get('/api/products')

      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveLength(1)
      expect(response.body).toEqual([
        {
          ...product.dataValues,
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String)
        }
      ])
    })
  })

  describe('allows delete product', () => {
    beforeEach(async () => {
      product = await productFactory.create('product')
    })

    it('delete product', async () => {
      const products = await request(app).get('/api/products')
      const response = await request(app).delete(
        `/api/products/${products.body[0].id}`
      )
      expect(response.statusCode).toBe(200)
    })
  })
})

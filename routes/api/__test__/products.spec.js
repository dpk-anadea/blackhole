import request from 'supertest'

import app from '../../../app'
import { sequelize } from '../../../models'
import productFactory from '../../../database/factory/product.factory'

describe('Products', () => {
  let product
  beforeEach(async () => {
    await sequelize.truncate({ cascade: true })
  })

  afterAll(() => {
    return sequelize.close()
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

  describe('allows get error', () => {
    it('get an empty products array', async () => {
      const response = await request(app).get('/')

      expect(response.error.text).toContain('unexpected error')
    })
  })
})

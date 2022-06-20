import { sequelize } from '@server/models'
import getSoldProducts from '../getSoldProducts'
import orderFactory from '@factory/order.factory'
import productFactory from '@factory/product.factory'

describe('Products sold', () => {
  beforeEach(async () => {
    await sequelize.truncate({ cascade: true })
  })

  afterAll(() => {
    return sequelize.close()
  })

  it('when calling a function, there must be an object with 5 parameters', async () => {
    const product = await productFactory.create('product')

    let orderItems = await orderFactory.createMany('order_item', 1, [
      { product_id: product.id }
    ])

    const response = await getSoldProducts()

    expect(response).toEqual([
      {
        name: product.name,
        cost: orderItems[0].cost,
        product_id: orderItems[0].product_id,
        total_quantity: String(orderItems[0].quantity),
        count: 1
      }
    ])
  })
})

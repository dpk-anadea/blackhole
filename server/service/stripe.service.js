const createOrder = require('./order/createOrder')
const { Product } = require('../models')

const stripe = require('stripe')(
  'sk_test_51Kw01FFiR2H5b1l17TNRgiEeHGBmKA4R7iyDf0htdYkXbT1kOmcLHUIl5h4wCxeRoZy8yOZb9whT5JKCBB2IlDFK00CEP3CenX'
)

class StripeService {
  async pay(userId, products, token) {
    let productsData = await Product.findAll({
      where: {
        id: products.ids
      }
    })

    productsData = productsData.map((product) => ({
      ...product.dataValues,
      quantity: products.quantities[product.id]
    }))

    const totalCost = productsData.reduce((prev, curr) => {
      return prev + curr.cost * curr.quantity
    }, 0)

    const charge = await stripe.charges.create({
      amount: totalCost * 100,
      currency: 'usd',
      description: 'Example charge',
      source: token.id
    })

    await createOrder(userId, productsData, totalCost)

    return { receipt_url: charge.receipt_url, status: charge.status }
  }
}

module.exports = new StripeService()

const stripe = require('stripe')(
  'sk_test_51Kw01FFiR2H5b1l17TNRgiEeHGBmKA4R7iyDf0htdYkXbT1kOmcLHUIl5h4wCxeRoZy8yOZb9whT5JKCBB2IlDFK00CEP3CenX'
)

const { Product } = require('../models')

class StripeService {
  async pay(productId) {
    const product = await Product.findOne({ where: { id: productId } })

    const price = await stripe.prices.create({
      currency: 'usd',
      unit_amount: `${product.cost}00`,
      product_data: { name: product.name }
    })

    console.log(price.id)

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: price.id,
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `http://localhost:8080/`,
      cancel_url: `http://localhost:8080/products`
    })

    return session
  }
}

module.exports = new StripeService()

const stripe = require('stripe')(
  'sk_test_51Kw01FFiR2H5b1l17TNRgiEeHGBmKA4R7iyDf0htdYkXbT1kOmcLHUIl5h4wCxeRoZy8yOZb9whT5JKCBB2IlDFK00CEP3CenX'
)

class StripeService {
  async pay(paymentDetails) {
    const price = await stripe.prices.create({
      currency: 'usd',
      unit_amount: `${paymentDetails.cost}00`,
      product_data: { name: paymentDetails.name }
    })

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `http://localhost:8080/thanks-for-buy`,
      cancel_url: `http://localhost:8080/cart`
    })

    return session
  }
}

module.exports = new StripeService()

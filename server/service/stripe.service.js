const stripe = require('stripe')(
  'sk_test_51Kw01FFiR2H5b1l17TNRgiEeHGBmKA4R7iyDf0htdYkXbT1kOmcLHUIl5h4wCxeRoZy8yOZb9whT5JKCBB2IlDFK00CEP3CenX'
)

const endpointSecret =
  'whsec_ca9fdaac4398780d2099054a953f25513cab1ab8efff461b208d55dca0418271'

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

  async webhook(payload, sig) {
    const event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)

    switch (event.type) {
      case 'payment_intent.succeeded': {
        return event.data.object
      }
      case 'payment_method.attached': {
        return event.data.object
      }
      default:
        console.log(`Unhandled event type ${event.type}.`)
    }
  }
}

module.exports = new StripeService()

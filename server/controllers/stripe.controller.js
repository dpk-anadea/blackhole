const stripeService = require('../service/stripe.service')

class StripeController {
  async pay(req, res, next) {
    try {
      const paymentDetails = req.body
      const session = await stripeService.pay(paymentDetails)

      res.json({ stripe_url: session.url })
    } catch (err) {
      next(err)
    }
  }

  // eslint-disable-next-line no-unused-vars
  async webhook(req, res, next) {
    try {
      const payload = req.body
      const sig = req.headers['stripe-signature']

      await stripeService.webhook(payload, sig)

      res.status(200)
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`)
    }
  }
}

module.exports = new StripeController()

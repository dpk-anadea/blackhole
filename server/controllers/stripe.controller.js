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
}

module.exports = new StripeController()

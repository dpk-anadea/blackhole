const stripeService = require('../service/stripe.service')

class StripeController {
  async pay(req, res, next) {
    try {
      const productId = req.params.product_id
      const session = await stripeService.pay(productId)

      res.json({ stripe_url: session.url })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new StripeController()

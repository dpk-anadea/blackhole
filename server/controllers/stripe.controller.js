const stripeService = require('../service/stripe.service')
class StripeController {
  async pay(req, res, next) {
    try {
      const { user_id: userId, products, token } = req.body

      const stripeResponse = await stripeService.pay(userId, products, token)

      res.json(stripeResponse)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new StripeController()

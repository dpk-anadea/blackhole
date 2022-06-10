const pay = require('../service/stripe.pay')
class StripeController {
  async pay(req, res, next) {
    try {
      const { user_id: userId, products, token } = req.body

      const stripeResponse = await pay(userId, products, token)

      res.json(stripeResponse)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new StripeController()

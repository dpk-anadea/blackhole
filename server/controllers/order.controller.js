const getOrders = require('../service/order/getOrders')

class OrderController {
  async getOrders(req, res, next) {
    try {
      const userId = req.params.user_id

      const orders = await getOrders(userId)

      res.json(orders)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new OrderController()

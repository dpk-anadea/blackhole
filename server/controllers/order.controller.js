const { Order, OrderItems } = require('../models')

class OrderController {
  async getOrders(req, res, next) {
    try {
      const products = await Order.findAll()
      res.json(products)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new OrderController()

const db = require('../database/db')

class ProductTypeController {
  async createProductType (req, res) {
    const { type } = req.body
    const newProductType = await db.query(`INSERT INTO products_type (type) values ($1) RETURNING *`, [type])
    res.json(newProductType.rows)
  }
}

module.exports = new ProductTypeController()

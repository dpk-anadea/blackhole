const { Product } = require('../../models')

module.exports = async () => {
  let products = await Product.findAll({
    attributes: { exclude: ['download_link'] }
  })
  return products
}

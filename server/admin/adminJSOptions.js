const AdminJS = require('adminjs')
const db = require('../models')
const { User, Order } = require('../models')

module.exports = {
  databases: [db],
  rootPath: '/admin',
  resources: [
    {
      resource: User,
      options: {
        actions: {
          userOrders: {
            actionType: 'resource',
            handler: async (request, response, context) => {
              const user = context.record
              const Orders = context._admin.findResource('Order')
              const userOrder = Order.findAll(context.record.param('order_id'))
              return {
                record: user.toJSON({ name: 'Dima' })
              }
            },
            component: AdminJS.bundle('./UserOrders')
          }
        }
      }
    }
  ]
}

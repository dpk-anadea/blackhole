const AdminJS = require('adminjs')
const db = require('../models')
const { User } = require('../models')
const orderService = require('../service/order.service')

module.exports = {
  databases: [db],
  rootPath: '/admin',
  resources: [
    {
      resource: User,
      options: {
        actions: {
          userOrders: {
            actionType: 'record',
            handler: async (request, response, context) => {
              const userOrders = await orderService.getOrders(
                context.record.param('id')
              )
              context.record.params.userOrders = userOrders
              return {
                record: context.record.toJSON(context.currentAdmin)
              }
            },
            component: AdminJS.bundle('./UserOrders')
          }
        }
      }
    }
  ]
}

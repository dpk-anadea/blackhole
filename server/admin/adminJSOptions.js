const AdminJS = require('adminjs')
const db = require('../models')
const { User } = require('../models')
const getOrders = require('../service/order/getOrders')

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
              const userOrders = await getOrders(context.record.param('id'))
              context.record.params.userOrders = userOrders
              return {
                record: context.record.toJSON(context.currentAdmin)
              }
            },
            component: AdminJS.bundle('./UserOrders')
          },
          userAccounts: {
            actionType: 'resource',
            component: AdminJS.bundle('./UserAccounts')
          }
        }
      }
    }
  ],
  pages: {
    Statistic: {
      component: AdminJS.bundle('./Statistics')
    }
  }
}

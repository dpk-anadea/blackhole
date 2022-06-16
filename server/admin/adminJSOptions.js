const AdminJS = require('adminjs')
const db = require('../models')
const { User } = require('../models')
const getOrders = require('../service/order/getOrders')
const getUsers = require('../service/user/getUsers')
const getSoldProducts = require('../service/statistic/getSoldProducts')

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
          }
        }
      }
    }
  ],
  pages: {
    Statistic: {
      handler: async (request, response, context) => {
        const soldProducts = await getSoldProducts()
        const users = await getUsers()
        return { soldProducts: soldProducts, users: users }
      },
      component: AdminJS.bundle('./Statistics')
    }
  }
}

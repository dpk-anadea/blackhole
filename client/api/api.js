import $api from '../http'
import axios from 'axios'

const endpoint = (resource) => `/api/${resource}`

const fetch = async (action, resource, payload = null, config = null) => {
  const response = await $api[action](endpoint(resource), payload, config)
  return response.data
}

export default {
  async login(email, password) {
    return fetch('post', 'login', { email, password })
  },
  async registration(user) {
    return fetch('post', 'registration', user)
  },
  async logout() {
    return fetch('post', 'logout')
  },
  async checkAuth() {
    const response = await axios.get(endpoint('refresh'), {
      withCredentials: true
    })
    return response.data
  },

  async getUsers() {
    return fetch('get', 'users')
  },
  async getProducts() {
    return fetch('get', 'products')
  },

  async postStripe(paymentDetails) {
    return fetch('post', 'stripe/pay', paymentDetails)
  },

  async postRequestPassword(email) {
    return fetch('post', 'reset-password', { email })
  },

  async getOrders(userId, token) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }

    return fetch('get', `users/${userId}/orders`, config)
  },

  async postResetPassword(reset_link, password) {
    return fetch('post', `reset-password/${reset_link}`, { password })
  }
}

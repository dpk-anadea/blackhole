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
  }
}

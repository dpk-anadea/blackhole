import $api from '../http'
import axios from 'axios'

const endpoint = (resource) => `/api/${resource}`

const fetch = async (action, resource, payload = null, config = null) => {
  const response = await $api[action](resource, payload, config)
  return response.data
}

export default class AuthService {
  static async login(email, password) {
    return fetch('post', endpoint('login'), { email, password })
  }

  static async registration(email, password) {
    return fetch('post', endpoint('registration'), { email, password })
  }

  static async logout() {
    return fetch('post', endpoint('logout'))
  }

  async checkAuth() {
    return await axios.get(endpoint('refresh'), {
      withCredentials: true
    })
  }
}

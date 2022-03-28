import axios from 'axios'

const endpoint = (resource) => `/api/${resource}`

const fetch = async (action, resource, payload = null, config = null) => {
  const response = await axios[action](resource, payload, config)
  return response.data
}

export default {
  async getUsers() {
    return fetch('get', endpoint('users'))
  }
}

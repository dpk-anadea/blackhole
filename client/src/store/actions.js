import api from '@/api/api'
import { action, mutator } from '@/store/constants'

export default {
  async [action.GET_USERS]({ commit }) {
    try {
      const users = await api.getUsers()
      commit(mutator.SET_USER, users)
    } catch (e) {
      console.log(e)
    }
  },
  async [action.CREATE_USER]({ commit }, userData) {
    try {
      const { users } = await api.createUser({
        ...userData
      })
      commit(mutator.SET_USER, users)
    } catch (e) {
      console.log(e)
    }
  }
}

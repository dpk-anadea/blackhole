import api from '@/api/api'
import AuthService from '@/services/AuthService'
import { action, mutator } from '@/store/constants'

export default {
  async [action.GET_USERS]({ commit }) {
    try {
      const users = await api.getUsers()
      commit(mutator.SET_USERS, users)
    } catch (e) {
      console.log(e)
    }
  },
  async [action.CREATE_USER]({ commit }, userData) {
    try {
      const user = await api.createUser({
        ...userData
      })
      commit(mutator.SET_USERS, user)
    } catch (e) {
      console.log(e)
    }
  },
  async [action.LOGIN]({ commit }, { email, password }) {
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem('token', response.data.accessToken)
      commit(mutator.SET_USER, response.data.user)
      commit(mutator.SET_AUTH, true)
    } catch (e) {
      console.log(e)
    }
  },
  async [action.LOGOUT]({ commit }) {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      commit(mutator.SET_USER, null)
      commit(mutator.SET_AUTH, false)
    } catch (e) {
      console.log(e)
    }
  }
}

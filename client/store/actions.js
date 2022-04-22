import api from '@/api/api'
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
      const user = await api.registration({
        ...userData
      })
      localStorage.setItem('token', user.accessToken)
      commit(mutator.SET_USER, user.user)
      commit(mutator.SET_AUTH, true)
    } catch (e) {
      console.log(e)
    }
  },
  async [action.LOGIN]({ commit }, { email, password }) {
    try {
      const user = await api.login(email, password)
      localStorage.setItem('token', user.accessToken)
      commit(mutator.SET_USER, user.user)
      commit(mutator.SET_AUTH, true)
    } catch (e) {
      console.log(e)
    }
  },
  async [action.LOGOUT]({ commit }) {
    try {
      await api.logout()
      localStorage.removeItem('token')
      commit(mutator.SET_USER, null)
      commit(mutator.SET_AUTH, false)
    } catch (e) {
      console.log(e)
    }
  },
  async [action.CHECK_AUTH]({ commit }) {
    try {
      const user = await api.checkAuth()
      localStorage.setItem('token', user.accessToken)
      commit(mutator.SET_USER, user.user)
      commit(mutator.SET_AUTH, true)
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  },
  async [action.GET_PRODUCTS]({ commit }) {
    try {
      const products = await api.getProducts()
      commit(mutator.SET_PRODUCTS, products)
    } catch (e) {
      console.log(e)
    }
  }
}

import Cookies from 'js-cookie'
import api from '@/api/api'
import { action, mutator } from '@/store/constants'
import router from '@/router'

export default {
  async [action.GET_USERS]({ commit }) {
    commit(mutator.SET_LOADING, true)
    try {
      const users = await api.getUsers()
      commit(mutator.SET_USERS, users)
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },
  async [action.CREATE_USER]({ commit }, userData) {
    commit(mutator.SET_LOADING, true)
    try {
      const user = await api.registration({
        ...userData
      })
      localStorage.setItem('token', user.accessToken)
      commit(mutator.SET_USER, user.user)
      commit(mutator.SET_AUTH, true)
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },
  async [action.LOGIN]({ commit }, { email, password }) {
    commit(mutator.SET_LOADING, true)
    try {
      const user = await api.login(email, password)
      localStorage.setItem('token', user.accessToken)
      commit(mutator.SET_USER, user.user)
      commit(mutator.SET_AUTH, true)
      await router.push({ name: 'home' })
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },
  async [action.LOGOUT]({ commit }) {
    commit(mutator.SET_LOADING, true)
    try {
      await api.logout()
      localStorage.removeItem('token')
      commit(mutator.SET_USER, null)
      commit(mutator.SET_AUTH, false)
      await router.push({ name: 'home' })
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },
  async [action.CHECK_AUTH]({ commit }) {
    commit(mutator.SET_LOADING, true)
    try {
      const user = await api.checkAuth()
      localStorage.setItem('token', user.accessToken)
      commit(mutator.SET_USER, user.user)
      commit(mutator.SET_AUTH, true)
    } catch (e) {
      console.log(e.response?.data?.message)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },
  async [action.GET_PRODUCTS]({ commit }) {
    commit(mutator.SET_LOADING, true)
    try {
      const products = await api.getProducts()
      commit(mutator.SET_PRODUCTS, products)
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },
  //CART
  async [action.ADD_PRODUCT_TO_CART]({ commit }, product) {
    commit(mutator.SET_LOADING, true)
    try {
      commit(mutator.SET_PRODUCT_TO_CART, product)
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },
  async [action.GET_PRODUCTS_FROM_STORAGE]({ commit }) {
    commit(mutator.SET_LOADING, true)
    try {
      const products = JSON.parse(Cookies.get('cart') || '[]')
      commit(mutator.SET_PRODUCTS_TO_CART, products)
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },
  async [action.DELETE_PRODUCT_FROM_CART]({ commit }, productId) {
    commit(mutator.SET_LOADING, true)
    try {
      commit(mutator.REMOVE_PRODUCT_FROM_CART, productId)
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },
  async [action.CLEAR_CART]({ commit }) {
    commit(mutator.SET_LOADING, true)
    try {
      commit(mutator.CLEAR_CART)
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  },

  async [action.TOGGLE_FLASH_MESSAGE]({ commit }, isShow) {
    commit(mutator.SET_FLASH_MESSAGE, isShow)
  },

  async [action.POST_STRIPE]({ commit }, payData) {
    commit(mutator.SET_LOADING, true)
    try {
      const response = await api.postStripe(payData)
      commit(mutator.SET_ORDER, response)
      return response
    } catch (e) {
      console.log(e)
    } finally {
      commit(mutator.SET_LOADING, false)
    }
  }
}

import { mutator } from '@/store/constants'

export default {
  [mutator.SET_USERS](state, users) {
    state.users = users
  },
  [mutator.SET_USER](state, user) {
    state.user = user
  },
  [mutator.SET_AUTH](state, isAuth) {
    state.isAuth = isAuth
  },
  [mutator.SET_LOADING](state, loading) {
    state.loading = loading
  },
  [mutator.SET_PRODUCTS](state, products) {
    state.products = products
  },
  [mutator.SET_PRODUCT_TO_CART](state, product) {
    const currentProduct = state.cart.find(({ id }) => id === product.id)
    state.cart = [...state.cart, product]
  }
}

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

    if (currentProduct) {
      currentProduct.count = product?.count
        ? product.count
        : currentProduct.count + 1
      state.cart.map((stateProduct) =>
        stateProduct.id === product.id ? product : stateProduct
      )
    } else {
      state.cart.push({ ...product, count: 1 })
    }

    sessionStorage.setItem('cart', JSON.stringify([...state.cart]))
  },
  [mutator.SET_PRODUCTS_TO_CART](state, products) {
    state.cart = [...state.cart, ...products]
  },
  [mutator.REMOVE_PRODUCT_FROM_CART](state, productId) {
    state.cart = state.cart.filter((product) => product.id !== productId)
    sessionStorage.setItem('cart', JSON.stringify([...state.cart]))
  }
}

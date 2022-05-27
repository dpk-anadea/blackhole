import Cookies from 'js-cookie'
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
      currentProduct.quantity = product?.quantity
        ? product.quantity
        : currentProduct.quantity + 1
      state.cart.map((stateProduct) =>
        stateProduct.id === product.id ? product : stateProduct
      )
    } else {
      state.cart.push({ ...product, quantity: 1 })
    }

    Cookies.set('cart', JSON.stringify([...state.cart]))
  },
  [mutator.SET_PRODUCTS_TO_CART](state, products) {
    state.cart = [...state.cart, ...products]
  },
  [mutator.SET_PRODUCTS_TO_CART_BY_ID](state, productIds) {
    const productsInCart = state.products.filter((product) =>
      productIds.includes(product.id)
    )
    state.cart = [...state.cart, ...productsInCart]
  },
  [mutator.REMOVE_PRODUCT_FROM_CART](state, productId) {
    state.cart = state.cart.filter((product) => product.id !== productId)

    Cookies.set('cart', JSON.stringify([...state.cart]))
  },
  [mutator.CLEAR_CART](state) {
    state.cart = []
    Cookies.set('cart', JSON.stringify([]))
  },

  [mutator.SET_FLASH_MESSAGE](state, isShow) {
    state.isShowFleshMessage = isShow
  },

  [mutator.SET_ORDER](state, order) {
    state.currentOrder = order
  },

  [mutator.SET_ORDERS](state, orders) {
    state.orders = orders
  }
}

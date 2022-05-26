import { get } from '@/store/constants'

export default {
  [get.CURRENT_USER](state) {
    return state.user
  },
  [get.IS_AUTHENTICATED](state) {
    return state.isAuth
  },
  [get.LOADING](state) {
    return state.loading
  },
  [get.PRODUCTS](state) {
    return state.products
  },
  [get.CART](state) {
    return state.cart
  },
  [get.IS_SHOW_FLASH_MESSAGE](state) {
    return state.isShowFleshMessage
  },

  [get.ORDER](state) {
    return state.currentOrder
  }
}

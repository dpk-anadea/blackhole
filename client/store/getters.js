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
  }
}

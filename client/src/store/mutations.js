import { mutator } from '@/store/constants'

export default {
  [mutator.SET_USER](state, users) {
    state.users = users
  }
}

import store from '../store'
import { get } from '@/store/constants'

export default {
  async redirection(to) {
    const currentUser = store.getters[get.CURRENT_USER]
    const isActivated = currentUser?.activated

    if (!isActivated && to.name !== 'EmailVerify') {
      return {
        name: 'EmailVerify'
      }
    }
  }
}

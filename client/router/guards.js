import store from '@/store'
import { action, get } from '@/store/constants'

export default {
  async redirection(to) {
    const accessToken = localStorage.getItem('token')
    if (accessToken) {
      await store.dispatch(action.CHECK_AUTH)
    }

    const isAuth = store.getters[get.IS_AUTHENTICATED]
    const currentUser = store.getters[get.CURRENT_USER]
    const isActivated = currentUser?.activated

    if (isAuth && !isActivated && to.name !== 'EmailVerify') {
      return {
        name: 'EmailVerify'
      }
    }

    if (to.name === 'EmailVerify' && (!isAuth || isActivated)) {
      return {
        name: 'Home'
      }
    }
  }
}

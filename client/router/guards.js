import store from '../store'
import { get } from '@/store/constants'

export default {
  async redirection(to) {
    const isAuth = store.getters[get.IS_AUTHENTICATED]
    const currentUser = store.getters[get.CURRENT_USER]
    const isActivated = currentUser?.activated

    if (isAuth && !isActivated && to.name !== 'EmailVerify') {
      return {
        name: 'EmailVerify'
      }
    }

    // if ((!isAuth || isActivated) && to.name === 'EmailVerify') {
    //   return {
    //     name: 'home'
    //   }
    // }
  }
}

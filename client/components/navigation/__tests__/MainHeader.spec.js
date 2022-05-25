import { mount } from '@vue/test-utils'
import state from '@/store/state'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'

import MainHeader from '@/components/navigation/MainHeader'

const createWrapper = (store) =>
  mount(MainHeader, {
    global: {
      plugins: [router, store]
    }
  })

describe('MainHeader component', () => {
  describe('when user are not logged in', () => {
    it('should be the text "Login" and "Create Account"', () => {
      const store = createNewStore(state)
      const wrapper = createWrapper(store)

      expect(wrapper.text()).toMatch('Home')
      expect(wrapper.text()).toMatch('Products')
      expect(wrapper.text()).toMatch('Login')
      expect(wrapper.text()).toMatch('Create account')
    })
  })

  describe('when user are logged in', () => {
    it('should be the text "Logout"', () => {
      const store = createNewStore()
      const wrapper = createWrapper(store)

      expect(wrapper.text()).toMatch('Home')
      expect(wrapper.text()).toMatch('Products')
      expect(wrapper.text()).toMatch('Logout')
    })
  })
})

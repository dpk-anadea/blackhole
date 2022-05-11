import { mount } from '@vue/test-utils'
import { store, emptyStore } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import MainHeader from '@/components/navigation/MainHeader'

describe('MainHeader component', () => {
  describe('when user are not logged in', () => {
    it('should be the text "Login" and "Create Account"', () => {
      const wrapper = mount(MainHeader, {
        global: {
          plugins: [router, emptyStore]
        }
      })

      expect(wrapper.text()).toMatch('Home')
      expect(wrapper.text()).toMatch('Products')
      expect(wrapper.text()).toMatch('Login')
      expect(wrapper.text()).toMatch('Create account')
    })
  })

  describe('when user are logged in', () => {
    it('should be the text "Logout"', () => {
      const wrapper = mount(MainHeader, {
        global: {
          plugins: [router, store]
        }
      })

      expect(wrapper.text()).toMatch('Home')
      expect(wrapper.text()).toMatch('Products')
      expect(wrapper.text()).toMatch('Logout')
    })
  })
})

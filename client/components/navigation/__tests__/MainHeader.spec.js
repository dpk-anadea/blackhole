import { mount } from '@vue/test-utils'
import { store, emptyStore } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import MainHeader from '@/components/navigation/MainHeader'

describe('MainHeader component', () => {
  describe('should be two states', () => {
    it('if user are not logged in', () => {
      const wrapper = mount(MainHeader, {
        global: {
          plugins: [router, emptyStore]
        }
      })

      expect(wrapper.text()).toMatch('Login')
      expect(wrapper.text()).toMatch('Create account')
    })

    it('if user are logged in', () => {
      const wrapper = mount(MainHeader, {
        global: {
          plugins: [router, store]
        }
      })

      expect(wrapper.text()).toMatch('Logout')
    })
  })
})

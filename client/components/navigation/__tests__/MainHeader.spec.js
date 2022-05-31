import { mount } from '@vue/test-utils'
import state from '@/store/state'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'

import MainHeader from '@/components/navigation/MainHeader'
import MyAccount from '@/components/navigation/MyAccount'

const createWrapper = (store) =>
  mount(MainHeader, {
    global: {
      plugins: [router, store]
    },
    stubs: {
      MyAccount
    }
  })

describe('MainHeader component', () => {
  describe('when user are not logged in', () => {
    it('should be the text "Login" and "Create Account"', () => {
      const store = createNewStore(state)
      const wrapper = createWrapper(store)

      expect(wrapper.text()).toMatch('Latest Product')
      expect(wrapper.text()).toMatch('Sample Packs')
      expect(wrapper.text()).toMatch('Plugins')
      expect(wrapper.text()).toMatch('Free Downloads')
      expect(wrapper.text()).toMatch('Home Page')
      expect(wrapper.text()).toMatch('Products')
      expect(wrapper.text()).toMatch('Login')
      expect(wrapper.text()).toMatch('Create account')
    })
  })

  describe('when user are logged in', () => {
    describe('should be the component and the text "My Account"', () => {
      describe('when hovering the mouse cursor', () => {
        it('should be the text "Orders", "Downloads", "Logout"', async () => {
          const store = createNewStore()
          const wrapper = createWrapper(store)

          expect(wrapper.text()).toMatch('Latest Product')
          expect(wrapper.text()).toMatch('Sample Packs')
          expect(wrapper.text()).toMatch('Plugins')
          expect(wrapper.text()).toMatch('Free Downloads')
          expect(wrapper.text()).toMatch('Home Page')
          expect(wrapper.text()).toMatch('Products')
          expect(wrapper.text()).toMatch('My Account')

          expect(wrapper.findComponent(MyAccount).exists()).toBe(true)

          await wrapper.find('[data-test="my-account"]').trigger('mouseover')

          expect(wrapper.text()).toMatch('Orders')
          expect(wrapper.text()).toMatch('Downloads')
          expect(wrapper.text()).toMatch('Logout')
        })
      })
    })
  })
})

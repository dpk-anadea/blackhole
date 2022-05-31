import { mount } from '@vue/test-utils'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'
import state from '@/store/state'

import ProductsCart from '@/components/ProductsCart'
import BhCartButtons from '@/components/buttons/BhCartButtons'
import BhCountControl from '@/components/buttons/BhCountControl'

describe('ProductsList component', () => {
  describe('when the cart is empty', () => {
    it('should be dis played "Continue Shopping" button and not be displayed "Check Out" button', async () => {
      const store = createNewStore(state)
      const wrapper = mount(ProductsCart, {
        global: { plugins: [store, router] },
        stubs: { BhCountControl }
      })

      expect(wrapper.text()).toMatch('Continue Shopping')
      expect(wrapper.findComponent({ name: 'BhCountControl' }).exists()).toBe(
        false
      )
      expect(wrapper.text()).toMatch('0')
      expect(wrapper.text()).not.toMatch('Check Out')
    })
  })

  describe('when the cart is full', () => {
    it('should be displayed "BhCartButtons" and "BhCountControl" components and "Check out" button', async () => {
      const store = createNewStore()
      const wrapper = mount(ProductsCart, {
        global: { plugins: [store, router] },
        stubs: { BhCartButtons, BhCountControl }
      })

      expect(wrapper.findAllComponents({ name: 'BhCountControl' }).length).toBe(
        1
      )
      expect(wrapper.findAllComponents({ name: 'BhCartButtons' }).length).toBe(
        2
      )
      expect(wrapper.text()).toMatch('Check Out')
    })
  })
})
